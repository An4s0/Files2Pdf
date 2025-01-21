const { processFolder } = require('../index');
const path = require('path');

const [inputFolder, outputFolder] = process.argv.slice(2);

if (!inputFolder || !outputFolder) {
  console.error('Usage: ppt-doc-to-pdf <input-folder> <output-folder>');
  process.exit(1);
}

processFolder(path.resolve(inputFolder), path.resolve(outputFolder));