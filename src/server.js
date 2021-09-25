const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routs')

const app = express()

// conexao com o banco de dados
db.connect()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilitando o server para receber dados via post (Formulário)
app.use(express.urlencoded( {extended: true} ))

// Definindo as rotas
app.use('/', routes)

//404
app.use((req,res) => { //middleware
    res.send('Página nao encontrada!')
})

//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))