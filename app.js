const Manipulador = require('./src/manipulator')
const Processor = require('./src/processor')
const Table = require('./src/table')
const htmlParser = require('./src/htmlParser')
const pdfParser = require('./src/pdfParser')

const manipulador = new Manipulador()

async function transformarExcel (){
    let arquivoexcel= await manipulador.read('./src/files/arquivo.csv')
    let dadosProcessadosEmArray = Processor.Process(arquivoexcel)
    let tabelaEstudantes = new Table(dadosProcessadosEmArray)
    let arquivoHTML = await htmlParser.Parse(tabelaEstudantes)
    manipulador.write(Date.now()+ ".html", arquivoHTML)
    pdfParser.Write(Date.now()+ ".pdf", arquivoHTML)
}
transformarExcel()


