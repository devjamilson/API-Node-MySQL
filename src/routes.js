const express = require('express')
const router = express.Router()


const produtoController = require('./controllers/produtoController')

router.get('/produtos', produtoController.buscarTodos)

const produto = require('./controllers/produtoController')

module.exports = router