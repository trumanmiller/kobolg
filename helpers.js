const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const stream = require('stream');

const parseLibgenSearch = (html) => {
  const $ = cheerio.load(html);
  const result = [];

  $('table.catalog tbody tr').each((index, element) => {
    const authors = [];
    $(element)
      .find('ul.catalog_authors li a')
      .each((i, authorElement) => {
        authors.push($(authorElement).text());
      });

    const series = $(element).find('td:nth-child(2)').text().trim();
    const title = $(element).find('td:nth-child(3) p a').text().trim();
    const language = $(element).find('td:nth-child(4)').text().trim();
    const fileSize = $(element).find('td:nth-child(5)').text().trim();
    const mirrors = [];
    let md5 = '';
    $(element)
      .find('td:nth-child(6) ul.record_mirrors_compact li a')
      .each((i, mirrorElement) => {
        const link = $(mirrorElement).attr('href');
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

const downloadEPUB = async (md5) => {
  console.log('Downloading:', md5);

  const url = `https://cdn3.booksdl.org/get.php?md5=${md5}`;
  const localDirectory = './epub';
  const fileName = `${md5}.epub`;
  const localPath = path.join(localDirectory, fileName);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to download file. Status: ${response.status} ${response.statusText}`);
    }

    const fileStream = fs.createWriteStream(localPath);
    await new Promise((resolve, reject) => {
      const pipeline = stream.pipeline(response.body, fileStream, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });

      // Handle errors during pipeline
      pipeline.on('error', (err) => {
        reject(err);
      });
    });
  } catch (error) {
    throw new Error(`Error downloading file: ${error.message}`);
  }
};

const deleteEPUB = (md5) => {
  try {
    fs.unlink(`./epub/${md5}.epub`, (err) => {
      if (err) throw err;
      console.log('epub removed');
    });
  } catch (err) {
    console.error('ERROR deleting epub: ', err.message);
  }
  try {
    fs.unlink(`./epub/${md5}.kepub.epub`, (err) => {
      if (err) throw err;
      console.log('kepub removed');
    });
  } catch (err) {
    console.error('ERROR deleting kepub: ', err.message);
    
  }
};

module.exports = { parseLibgenSearch, downloadEPUB, deleteEPUB };
