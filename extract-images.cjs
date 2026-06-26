const fs = require('fs');
const path = require('path');

async function extractImages() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = 'd:\\ADmissionTurkey\\Website deisgn.pdf';
  const outDir = path.join(__dirname, 'public', 'assets', 'extracted');
  fs.mkdirSync(outDir, { recursive: true });

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data, verbosity: 0 }).promise;
  let imgIndex = 0;

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const ops = await page.getOperatorList();
    const { fnArray, argsArray } = ops;

    for (let j = 0; j < fnArray.length; j++) {
      if (fnArray[j] === pdfjsLib.OPS.paintImageXObject) {
        const imgName = argsArray[j][0];
        try {
          const img = await page.objs.get(imgName);
          if (img && img.data) {
            const width = img.width;
            const height = img.height;
            const { createCanvas } = require('@napi-rs/canvas');
            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext('2d');
            const imageData = ctx.createImageData(width, height);
            imageData.data.set(img.data);
            ctx.putImageData(imageData, 0, 0);
            const outFile = path.join(outDir, `img-p${i}-${String(++imgIndex).padStart(3, '0')}.png`);
            fs.writeFileSync(outFile, canvas.toBuffer('image/png'));
            console.log(`Saved ${outFile} (${width}x${height})`);
          }
        } catch (e) {
          // skip
        }
      }
    }
  }
  console.log('Done. Total images:', imgIndex);
}

extractImages().catch(console.error);
