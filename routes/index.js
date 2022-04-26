const express = require('express')
const Router = express.Router()

Router.use(express.urlencoded({extended:false}))
// controllers
const controllers = require('../controllers')

// Welcome page
Router.get('/',(req,res)=>{
    controllers.HomeController.index(req,res)
})


// CRUD
Router.get('/users',(req,res)=>{ // get all
    controllers.UserController.all(req,res)
})
Router.get('/users/add',(req,res)=>{ // add
    controllers.UserController.add(req,res)
})
Router.post('/users/add',(req,res)=>{ // save
    controllers.UserController.store(req,res)
})
Router.get('/users/update/:id',(req,res)=>{ // edit
    controllers.UserController.edit(req,res)
})
Router.post('/users/update',(req,res)=>{ // update
    controllers.UserController.update(req,res)
})
Router.post('/users/delete',(req,res)=>{ // delete
    controllers.UserController.delete(req,res)
})

module.exports = Router