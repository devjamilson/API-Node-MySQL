const produtoService = require('../services/produtoService')

module.exports = {
    buscarTodos: async (req, res) =>{
        let json = {err: '', result:[]}
        
        let produtos = await produtoService.buscarTodos()
    
        for(let i in produtos){
            json.result.push({
                codigo: produtos[i].codigo,
                nome: produtos[i].nome,
                descricao: produtos[i].descricao,
                valor: produtos[i].valor
            })
        }
        res.json(json)
    },
    buscarUm: async (req, res) =>{
        let json = {error: '', result:{}}

        let codigo = req.params.codigo
        let carro = await produtoService.buscarUm(codigo)

        if(carro){
            json.result = carro
        }

        res.json(json)
    }
}