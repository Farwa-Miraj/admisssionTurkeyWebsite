const fs = require('fs');
const path = require('path');
const { createCanvas } = require('@napi-rs/canvas');

async function extractPdf() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'd:\\ADmissionTurkey\\Website deisgn.pdf';
  const outDir = path.join(__dirname, 'design-pages');
  fs.mkdirSync(outDir, { recursive: true });

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data, verbosity: 0 }).promise;
  console.log('Total pages:', doc.numPages);

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext('2d');

    await page.render({
      canvasContext: ctx,
      viewport,
    }).promise;

    const outFile = path.join(outDir, `page-${String(i).padStart(2, '0')}.png`);
    fs.writeFileSync(outFile, canvas.toBuffer('image/png'));
    console.log('Saved', outFile, `${Math.round(viewport.width)}x${Math.round(viewport.height)}`);
  }
}

extractPdf().catch(console.error);
