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
    },

    inserir: async (req, res) =>{
        let json = {error: '', result:{}}

        let nome = req.body.nome
        let descricao = req.body.descricao
        let valor = req.body.valor

        if(nome && descricao && valor){
            let produtoCodigo = await produtoService.inserir(nome, descricao, valor)

            json.result = {
                codigo: produtoCodigo,
                nome,
                descricao,
                valor
            }
        }else{
            json.error = "Campos não enviados"
        }

        res.json(json)
    },
    atualizar: async (req, res) =>{
        let json = {error: '', result:{}}

        let codigo = req.params.codigo
        let nome = req.body.nome
        let descricao = req.body.descricao
        let valor = req.body.valor

        if(nome && descricao && valor && codigo){
            await produtoService.atualizar(nome, descricao, valor, codigo)

            json.result = {
                codigo,
                nome,
                descricao,
                valor
            }
        }else{
            json.error = "Campos não enviados"
        }

        res.json(json)
    },
    deletar: async (req, res)=>{
        let json = {error: '', result:{}}
        
        await produtoService.deletar(req.params.codigo)
        res.json(json)
    }
}