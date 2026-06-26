import { extractFull } from 'node-7z';
import path from 'path';
import { fileURLToPath } from 'url';
import Seven from '7zip-bin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rarPath = path.join(__dirname, 'design-extract', 'Website deisgn.rar');
const outPath = path.join(__dirname, 'design-extract', 'output');

const stream = extractFull(rarPath, outPath, {
  $bin: Seven.path7za,
});

stream.on('end', () => console.log('Extraction complete:', outPath));
stream.on('error', (err) => console.error('Error:', err));
