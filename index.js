const fs = require('fs');
const path = require('path');

function generateExcelFromTemplate(context) {
    
  const excelTemplate = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic
    rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce
      lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>
      </x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></
      xml><![endif]--></head><body>{table}</body></html>
  `;
  
  const formattedTemplate = excelTemplate.replace(/{(\w+)}/g, (match, key) => context[key] || '');
  const outputFilePath = path.join(__dirname, `${context.filename}.xls`);

  fs.writeFileSync(outputFilePath, formattedTemplate, 'utf8');
  console.log(`Excel file generated at ${outputFilePath}`);
}

module.exports = generateExcelFromTemplate;
