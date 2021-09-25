const router = require('express').Router()

const CustomersController = require('../controllers/customers.js')
const IndexController = require('../controllers/index.js')

// rotas
router.get('/', IndexController.index)

//Registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//listar
router.get('/list', CustomersController.list)

//editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//remover
router.get('/remove/:id', CustomersController.remove)
module.exports = router