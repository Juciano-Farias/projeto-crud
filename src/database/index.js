const mongoose = require('mongoose')

function connect() {

mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

const db = mongoose.connection

db.once('open', () => {
    console.log('Connected to database')
})

db.on('error', console.error.bind(console, 'connecting error:'))
}

module.exports = {
    connect
}