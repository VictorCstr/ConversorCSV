const pdf = require('html-pdf')

module.exports = class pdfParser{
    static Write(filename, html){
        pdf.create(html, {}).toFile(filename, (err) =>{
            
        })
    }
}