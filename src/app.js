const Manipulador = require('./manipulator')
const Processor = require('./processor')
const Table = require('./table')
const htmlParser = require('./htmlParser')
const pdfParser = require('./pdfParser')

const manipulador = new Manipulador()

async function transformarExcel (){
    let arquivoexcel= await manipulador.read('./files/arquivo.csv')
    let dadosProcessadosEmArray = Processor.Process(arquivoexcel)
    let tabelaEstudantes = new Table(dadosProcessadosEmArray)
    let arquivoHTML = await htmlParser.Parse(tabelaEstudantes)
    manipulador.write(Date.now()+ ".html", arquivoHTML)
    pdfParser.Write(Date.now()+ ".pdf", arquivoHTML)
}
transformarExcel()


