function index(req, res) {
    res.render('index', {
        tittle: 'Página inicial'
    })
}

module.exports = {
    index,
}