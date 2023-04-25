const db = require('../db')


module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM produtos', (err, results)=>{
                if(err){ 
                    rejeitado(err) 
                    return 
                }
                aceito(results)
            })
        })
    },
    buscarUm: (codigo)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM produtos WHERE codigo = ?', [codigo], (error, results)=>{
                if(error){ 
                    rejeitado(error) 
                    return 
                }

                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })
        })
    },
    inserir: (nome, descricao, valor)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO produtos (nome, descricao, valor) VALUES (?, ?, ?)', [nome, descricao, valor], (error, results)=>{
                if(error) {
                    rejeitado(error) 
                    return
                }
                aceito(results.insertCodigo)
            })
        })
    }
}