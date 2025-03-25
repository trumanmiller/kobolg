const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const stream = require("stream");

const parseLibgenSearch = (html) => {
  const $ = cheerio.load(html);
  const result = [];

  $("table.catalog tbody tr").each((index, element) => {
    const authors = [];
    $(element)
      .find("ul.catalog_authors li a")
      .each((i, authorElement) => {
        authors.push($(authorElement).text());
      });

    const series = $(element).find("td:nth-child(2)").text().trim();
    const title = $(element).find("td:nth-child(3) p a").text().trim();
    const language = $(element).find("td:nth-child(4)").text().trim();
    const fileSize = $(element).find("td:nth-child(5)").text().trim();
    const mirrors = [];
    let md5 = "";
    $(element)
      .find("td:nth-child(6) ul.record_mirrors_compact li a")
      .each((i, mirrorElement) => {
        const link = $(mirrorElement).attr("href");
        if (md5.length < 2) md5 = link.slice(-32);
        mirrors.push(link);
      });

    result.push({
      authors,
      series,
      title,
      language,
      fileSize,
      mirrors,
      md5,
    });
  });

  return result;
};

// download from the libgen.li source, cdn3.booksdl.lc

const downloadEPUBbooksdl = async (md5) => {
  console.log("attempting download from booksdl.lc :", md5);

  const url = `https://cdn3.booksdl.lc/get.php?md5=${md5}&key=W9A21PN7BW3JRHPA`;
  const localDirectory = "./epub";
  const fileName = `${md5}.epub`;
  const localPath = path.join(localDirectory, fileName);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        response.status,
        "error downloading",
        md5,
        "from booksdl.lc"
      );

      throw new Error(
        `Failed to download file. Status: ${response.status} ${response.statusText}`
      );
    }

    const fileStream = fs.createWriteStream(localPath);
    await new Promise((resolve, reject) => {
      const pipeline = stream.pipeline(response.body, fileStream, (err) => {
        if (err) {
          console.error("failed during download with error: ", err);
          reject(err);
        } else {
          resolve();
        }
      });

      // Handle errors during pipeline
      pipeline.on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    console.error(err, "error downloading", md5, "from booksdl.lc");
    throw new Error(`Error downloading file: ${err.message}`);
  }
};

// download from libgen.rs source, books.ms

const downloadEPUBbookms = async (md5) => {
  console.log("attempting download from books.ms :", md5);
  const url = `https://books.ms/fiction/${md5}`;

  const localDirectory = "./epub";
  const fileName = `${md5}.epub`;
  const localPath = path.join(localDirectory, fileName);

  let downloadUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        response.status,
        "error downloading",
        md5,
        "from booksdl.lc"
      );
      throw new Error(
        `Failed to download file. Status: ${response.status} ${response.statusText}`
      );
    }
    const buffer = await response.arrayBuffer();
    const html = new TextDecoder("utf-8").decode(new Uint8Array(buffer));
    const $ = cheerio.load(html);

    downloadUrl = $("#download h2:first-of-type a").attr("href");
  } catch (err) {
    console.error("error getting download url", err);
    throw new Error(`error getting download url ${err.message}`);
  }

  try {
    const response = await fetch(downloadUrl);

    if (!response.ok) {
      console.error(response.status, "error downloading", md5, "from books.ms");

      throw new Error(
        `Failed to download file. Status: ${response.status} ${response.statusText}`
      );
    }

    const fileStream = fs.createWriteStream(localPath);
    await new Promise((resolve, reject) => {
      const pipeline = stream.pipeline(response.body, fileStream, (err) => {
        if (err) {
          console.error("failed during download with error: ", err);
          reject(err);
        } else {
          resolve();
        }
      });

      // Handle errors during pipeline
      pipeline.on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    console.error(err, "error downloading", md5, "from books.ms");
    throw new Error(`Error downloading file: ${err.message}`);
  }
};

const deleteEPUB = (md5) => {
  setTimeout(() => {
    try {
      fs.unlink(`./epub/${md5}.epub`, (err) => {
        if (err) console.error("ERROR deleting epub: ", err.message);
        console.log("epub removed");
      });
    } catch (err) {
      console.error("ERROR deleting epub: ", err.message);
    }
  }, 0);
  setTimeout(() => {
    try {
      fs.unlink(`./epub/${md5}.kepub.epub`, (err) => {
        if (err) console.error("ERROR deleting kepub: ", err.message);
        console.log("kepub removed");
      });
    } catch (err) {
      console.error("ERROR deleting kepub: ", err.message);
    }
  }, 600000);
};

module.exports = {
  parseLibgenSearch,
  downloadEPUBbooksdl,
  deleteEPUB,
  downloadEPUBbookms,
};
