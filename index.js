// const libgen = require('libgenesis');
const fs = require('fs');
const https = require('https');
const app = require('express')();
const path = require('path');
const { spawn } = require('child_process');

const { parseLibgenSearch, downloadEPUB, removeEPUB } = require('./helpers');

const PORT = 3001;

app.get('/', (req, res, err) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/search', (req, res, next) => {
  const search = req.query.s;
  if (search.length <= 2) return res.status().send('invalid search length');
  console.log('Search:', search);
  fetch(`https://libgen.is/fiction/?q=${search}&criteria=&language=&format=epub`)
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const html = new TextDecoder('utf-8').decode(new Uint8Array(buffer));
      // console.log(parseLibgenSearch(html));
      res.send(JSON.stringify(parseLibgenSearch(html)));
    })
    .catch((error) => {
      console.error('Error:', error);
      next(error);
    });
});

app.get('/download', async (req, res, err) => {
  const md5 = req.query.md5;
  console.log('Download:', md5);
  spawn('./kepubify', ['-i','-o', `./epubs`, `./epubs/${md5}.epub`]);
  try {
    await downloadEPUB(md5);
    
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
});

app.all((req, res, next) => {
  res.status(404).send('page not found');
});

app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
});

function parseHTML(html) {
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
    $(element)
      .find('td:nth-child(6) ul.record_mirrors_compact li a')
      .each((i, mirrorElement) => {
        mirrors.push($(mirrorElement).attr('href'));
      });

    result.push({
      authors,
      series,
      title,
      language,
      fileSize,
      mirrors,
    });
  });

  return result;
}

// const parsedData = parseHTML(html);
// console.log(parsedData);

// setInterval(() => {
//   fetch('http://cdn3.booksdl.org/get.php?md5=2c3809164b7d9727b23ca6a9ac654613')
//     .then((res) => {
//       console.log(res.status);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }, 1500);
