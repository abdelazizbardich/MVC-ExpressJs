const express = require('express')
const Router = express.Router()

// controllers
const controllers = require('../controllers')
Router.get('/',(req,res)=>{
    controllers.HomeController.index(req,res)
})

module.exports = Router