const fs = require('fs');
const path = require('path');
const libre = require('libreoffice-convert');

const convertToPDF = (filePath, outputPath) => {
  return new Promise((resolve, reject) => {
    const file = fs.readFileSync(filePath);
    libre.convert(file, '.pdf', undefined, (err, pdfBuffer) => {
      if (err) {
        reject(err);
      } else {
        fs.writeFileSync(outputPath, pdfBuffer);
        resolve(outputPath);
      }
    });
  });
};

const processFolder = async (inputFolder, outputFolder) => {
  try {
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }

    const files = fs.readdirSync(inputFolder);

    for (const file of files) {
      const inputFilePath = path.join(inputFolder, file);
      const outputFilePath = path.join(outputFolder, `${path.parse(file).name}.pdf`);

      const ext = path.extname(file).toLowerCase();
      if (['.ppt', '.pptx', '.doc', '.docx'].includes(ext)) {
        console.log(`Converting ${file} to PDF...`);
        await convertToPDF(inputFilePath, outputFilePath);
        console.log(`Saved: ${outputFilePath}`);
      } else {
        console.log(`Skipping unsupported file: ${file}`);
      }
    }

    console.log('All files processed successfully!');
  } catch (error) {
    console.error('Error processing folder:', error);
  }
};

module.exports = { processFolder };