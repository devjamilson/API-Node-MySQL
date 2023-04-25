const express = require('express')
const router = express.Router()


const produtoController = require('./controllers/produtoController')

router.get('/produtos', produtoController.buscarTodos)
router.get('/produtos/:codigo', produtoController.buscarUm)
router.post('/produto', produtoController.inserir)
router.put('/produto/:codigo', produtoController.atualizar)

const produto = require('./controllers/produtoController')

module.exports = router