const { extractFull } = require('node-7z');
const path = require('path');
const Seven = require('7zip-bin');

const rarPath = path.join(__dirname, 'design-extract', 'Website deisgn.rar');
const outPath = path.join(__dirname, 'design-extract', 'output');

const stream = extractFull(rarPath, outPath, {
  $bin: Seven.path7za,
});

stream.on('end', () => console.log('Extraction complete:', outPath));
stream.on('error', (err) => console.error('Error:', err));
