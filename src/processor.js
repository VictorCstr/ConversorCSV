module.exports = class Processor{
    static Process(data){
        let arrayQuebraLinha = data.split("\r\n");
        let rows = [];
       
        arrayQuebraLinha.forEach(row =>{
            let arrayDividido = row.split(",");
            rows.push(arrayDividido)
        })

        return rows
        
    }

}