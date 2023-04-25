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
    }
}