const ejs = require('ejs')

module.exports = class htmlParser{
    static async Parse(table){
      return await ejs.renderFile('./files/table.ejs', {header: table.header, rows: table.rows} )
    }
}