**Excel Generator from Template**

[![Coverage Status](https://coveralls.io/repos/github/rahuljaim/generate-excel-from-html-table/badge.svg?branch=main)](https://coveralls.io/github/rahuljaim/generate-excel-from-html-table?branch=main)
[![npm version](https://img.shields.io/npm/v/generate-excel-from-html-table.svg)](https://www.npmjs.com/package/generate-excel-from-html-table)
[![License](https://img.shields.io/npm/l/generate-excel-from-html-table.svg)](https://github.com/rahuljaim/generate-excel-from-html-table/blob/main/LICENSE)

This Node.js module allows you to generate Excel files from an HTML template. It's a lightweight and efficient solution for creating Excel files with customized content. This README provides a step-by-step guide on how to set up and use this module.

## Installation

Install ui-modal-and-timeout with npm

```bash
  npm i generate-excel-from-html-table --save-dev
```

## How to use

To generate an Excel file from a template, follow these steps:

1. Open the `generateExcelFromTemplate.js` file in the project directory.

2. Modify the `context` object with your specific parameters. For example:

   ```bash
   const context = {
     worksheet: 'My Sheet',
     table: '<table><tr><td>Data</td></tr></table>',
     id: 'buttonId',
     className: 'buttonClass',
     buttonText: 'Export',
     filename: 'myExcelFile'
   };
   ```

   - `worksheet`: The name of the worksheet in the Excel file.
   - `table`: HTML table content to include in the Excel file.
   - `id`, `className`, `buttonText`: Button details for the export feature.
   - `filename`: Desired filename for the Excel file.

3. Run the script using the following command:

   ```bash
   node generateExcelFromTemplate.js
   ```

4. The generated Excel file will be saved in the same directory with the filename you provided, e.g., `myExcelFile.xls`.

## Example

Here's an example of how to generate an Excel file using this module:

```bash
const generateExcelFromTemplate = require('./generateExcelFromTemplate');

const context = {
  worksheet: 'Sales Data',
  table: '<table><tr><td>Product</td><td>Revenue</td></tr><tr><td>A</td><td>$100</td></tr></table>',
  id: 'exportButton',
  className: 'downloadButton',
  buttonText: 'Download Excel',
  filename: 'sales_data'
};

generateExcelFromTemplate(context);
```

## Use in React

- Import the generateExcelFromTemplate function you've created for generating Excel files using your provided context.
- Define the Excel Generation Handler.

```bash
function App() {
  const handleGenerateExcel = () => {
    const context = {worksheet: 'My Sheet',table: document.getElementById('myTableId'),filename: 'table_data'}
    generateExcelFromTemplate(context);
   }

  return (
    <div className="App">
      <table id="myTableId">
        {/* ... Table content ... */}
      </table>
      <button onClick={handleGenerateExcel}>Generate Excel</button>
    </div>
  );
}

export default App;

```

## Notes

- This module does not rely on third-party libraries like jsdom, making it lightweight and efficient.
- Generated Excel files will be saved in the same directory where the script is executed.

## License

This project is licensed under the MIT License. Feel free to use and modify it for your needs.

## Author

Rahul Jain

- GitHub: [github/rahuljaim](https://github.com/rahuljaim)
- Email: [rahuljait@gmail.com](mailto:rahuljait@gmail.com)
