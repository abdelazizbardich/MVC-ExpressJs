const express = require('express')
const server = express()
const Router = require('./routes/index')

server.set('view engine','ejs')
server.use(express.static('public')) // static files
server.use(Router) // express router

server.listen(8080,()=>{
    console.log("server is running on: http://localhost:8080");
})