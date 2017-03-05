'use strict'
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(require('./middleware'))


app.get('*', function (request, response){
    response.render(path.resolve(__dirname, './views', 'index.ejs'))
})

app.listen(port)
console.log("server started on port " + port)
