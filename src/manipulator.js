const fs = require('fs')
const util = require('util')

module.exports = class Manipulador{
    constructor(){
        this.reader = util.promisify(fs.readFile)
        this.writer = util.promisify(fs.writeFile)
    }

    async read(filepath){
        try{
            return await this.reader(filepath, 'utf-8')
        }catch(err){
            console.log("Erro: " + err)
        }
    }

    async write(filepath, content){
        try{
            await this.writer(filepath, content)
            return true
        }catch(err){
            console.log("Erro: " + err)
        }
    }

}