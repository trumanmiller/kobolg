// const libgen = require('libgenesis');
const fs = require('fs');
const fp = require('fs/promises');
const https = require('https');
const app = require('express')();
const path = require('path');
const { spawn, execFile } = require('child_process');

const { parseLibgenSearch, downloadEPUB, deleteEPUB } = require('./helpers');

const PORT = 3000;

app.get('/', (req, res, err) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/search', async (req, res, next) => {
  const search = req.query.s;
  const file = await fp.readFile('./index.html');
  let html = file.toString();
  const startingIndex = html.search('<tbody id="tableBody">') + 22;

  try {
    if (search.length <= 2) return res.status().send('invalid search length');
  } catch (err) {
    next(err);
  }
  console.log('Search:', search);
  fetch(`https://libgen.is/fiction/?q=${search}&criteria=&language=&format=epub`)
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const libgenHTML = new TextDecoder('utf-8').decode(new Uint8Array(buffer));
      // console.log(parseLibgenSearch(html));
      const bookData = parseLibgenSearch(libgenHTML);

      const bookNodes = bookData.map(({ authors, series, title, fileSize, md5 }) => {
        return `
        <tr>
          <td>${authors.join('; ')}</td>
          <td>${series}</td>
          <td>${title}</td>
          <td>${fileSize}</td>
          <td>
            <a href='/download?md5=${md5}'>GET</a>
          </td>
        </tr>
        `;
      });
      // fs.writeFileSync('./test.html', html);
      const modifiedHtml = html.slice(0, startingIndex) + bookNodes.join('') + html.slice(startingIndex);
      res.contentType('text/html');
      res.status(200).send(modifiedHtml);
    })
    .catch((error) => {
      console.error('Error:', error);
      next(error);
    });
});

app.get('/download', async (req, res, err) => {
  const start = Date.now();
  const md5 = req.query.md5;
  // console.log('Download:', md5);
  try {
    await downloadEPUB(md5);
    // res.setHeader('Content-disposition', `attachment; filename=${md5}.kepub.epub`);
    res.setHeader('Content-Disposition', 'attachment; filename=filename.epub"');
    res.setHeader('Content-Type', 'application/epub');

    execFile('./kepubify', ['-i', '-o', `./epub`, `./epub/${md5}.epub`], (error, stdout, stderr) => {
      if (error) {
        throw error;
      } else {
        // res.setHeader('Content-Disposition', 'attachment; filename=filename.epub"');
        // res.setHeader('Content-Type', 'application/epub');
        res.download(path.join(__dirname, `./epub/${md5}.kepub.epub`));
        setTimeout(() => {
          deleteEPUB(md5);
        }, 5000);
      }
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    deleteEPUB(md5);
    res.status(500).send('');
  }
  console.log(Date.now() - start);
});

app.all((req, res, next) => {
  res.status(404).send('page not found');
});

app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('listening on port: ' + PORT);
});

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
