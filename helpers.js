const fs = require('fs');
const path = require('path');

const parseLibgenSearch = async () => {};

const downloadEPUB = async (md5) => {
  const url = `https://cdn3.booksdl.org/get.php?md5=${md5}`;
  const localDirectory = './epubs';
  const fileName = md5 + '.epub';
  const localPath = path.join(localDirectory, fileName);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to download file. Status: ${response.status} ${response.statusText}`);
    }

    const fileStream = fs.createWriteStream(localPath);
    await new Promise((resolve, reject) => {
      response.body.pipe(fileStream);
      response.body.on('error', reject);
      fileStream.on('finish', resolve);
      fileStream.on('error', reject);
    });
  } catch (error) {
    throw new Error(`Error downloading file: ${error.message}`);
  }
};



// Download the file and write it to the local directory

module.exports = { parseLibgenSearch, downloadEPUB, deleteEPUB };
