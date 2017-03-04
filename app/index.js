'use strict'
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const app = express()


app.use(require('./middleware'))


app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, './views', 'index.html'))
})


app.listen(port)
console.log("server started on port " + port)
