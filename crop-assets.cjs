const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const pages = path.join(__dirname, 'design-pages');
const out = path.join(__dirname, 'public', 'assets');
fs.mkdirSync(out, { recursive: true });

// Coordinates based on 2172px wide design pages (scale factor applied)
const crops = [
  { src: 'page-02.png', name: 'university-campus.jpg', left: 170, top: 720, width: 920, height: 780 },
  { src: 'page-02.png', name: 'university-logos.png', left: 120, top: 80, width: 1950, height: 280 },
  { src: 'page-03.png', name: 'student-girl.jpg', left: 1180, top: 720, width: 520, height: 680 },
  { src: 'page-03.png', name: 'medipol-university.jpg', left: 1480, top: 520, width: 580, height: 920 },
  { src: 'page-04.png', name: 'aerial-university.jpg', left: 560, top: 280, width: 1050, height: 620 },
  { src: 'page-05.png', name: 'students-group.jpg', left: 170, top: 120, width: 780, height: 720 },
  { src: 'page-05.png', name: 'avatars.png', left: 200, top: 680, width: 280, height: 60 },
  { src: 'page-06.png', name: 'contact-bg.jpg', left: 0, top: 0, width: 2171, height: 520 },
  { src: 'page-06.png', name: 'map.jpg', left: 0, top: 900, width: 2171, height: 1327 },
];

async function run() {
  for (const c of crops) {
    const srcPath = path.join(pages, c.src);
    const destPath = path.join(out, c.name);
    await sharp(srcPath)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .jpeg({ quality: 90 })
      .toFile(destPath);
    console.log('Cropped', c.name);
  }
}

run().catch(console.error);
