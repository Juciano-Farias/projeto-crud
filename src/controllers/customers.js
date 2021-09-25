const CustomersMoldel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTittle = 'Cadastro de clientes'  

function index(req, res) {
    res.render('register', {
        tittle: defaultTittle
    })
}

async function add(req,res) {
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersMoldel({
        name,
        age,
        email,
        password: passwordCrypto
    })

    register.save()
    
    res.render('register', {
        tittle: defaultTittle,
        message: 'Cadastro realizado com sucesso',
    })
}

async function list(req,res) {
    const users = await CustomersMoldel.find()

    res.render('list', {
        tittle: 'listagem de usuários',
        users
    })
}

async function formEdit(req,res) {
    const { id } = req.query

    const user = await CustomersMoldel.findById(id)

    res.render('edit', {
        tittle: 'Editar usuário',
        user,
    })
}

async function edit(req,res) {
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params

    const user = await CustomersMoldel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        tittle: 'Editar usuário',
        user,
        message: 'Usuario alterado com sucesso!',
    })
}

async function remove(req,res) {
    const { id } = req.params

    const remove = await CustomersMoldel.deleteOne({ _id: id })

    res.redirect('/list')

}

module.exports = {
    add,
    index,
    list,
    formEdit,
    edit,
    remove,
}