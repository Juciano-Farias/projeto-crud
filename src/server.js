const express = require('express')
const path = require('path')
const app = express()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilitando o server para receber dados via post (Formulário)
app.use(express.urlencoded( {extended: true} ))

// rotas
app.get('/', (req,res) => {
    res.render('index', {
        tittle: 'Titulo teste'
    })
})

//404
app.use((req,res) => { //middleware
    res.send('Página nao encontrada!')
})

//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))