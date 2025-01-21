# Files2Pdf

Files2Pdf is a Node.js package for converting PowerPoint (`.ppt`, `.pptx`) and Word (`.doc`, `.docx`) files to PDF. It processes all supported files within a folder and saves the converted PDFs to the specified output directory.

## Installation

Install **Files2Pdf** globally to use it as a command-line tool:

```bash
npm install -g files2pdf
```

Or install it locally in your project:

```bash
npm install files2pdf
```

## Usage

### Command Line Interface (CLI)

You can use `Files2Pdf` directly from the command line.

```bash
files2pdf <input-folder> <output-folder>
```

- `<input-folder>`: Path to the folder containing the files to convert.
- `<output-folder>`: Path to the folder where the converted PDFs will be saved.

### Example

```bash
files2pdf ./input ./output
```
This command converts all supported files in the `./input` folder to PDFs and saves them in the `./output` folder.

### Programmatic Usage

You can also use `Files2Pdf` in your Node.js projects by importing the `processFolder` function.

```javascript
const { processFolder } = require('files2pdf');
const path = require('path');

const inputFolder = path.resolve('./input');
const outputFolder = path.resolve('./output');

processFolder(inputFolder, outputFolder)
  .then(() => console.log('All files converted successfully!'))
  .catch(err => console.error('Error converting files:', err));
```

## Supported File Types

- PowerPoint: `.ppt`, `.pptx`
- Word: `.doc`, `.docx`

## Features

- Converts multiple files in a folder to PDF.
- Supports both PowerPoint and Word file formats.
- Automatically skips unsupported file types.
- Creates the output folder if it doesn’t exist.

## Requirements

- Node.js (version 14 or higher recommended)
- LibreOffice installed on your system (required for the `libreoffice-convert` library to work).

## Troubleshooting

If you encounter issues with the conversion:

1. Ensure LibreOffice is installed and properly configured.
2. Check file permissions for the input and output folders.
3. Verify that the file formats are supported.