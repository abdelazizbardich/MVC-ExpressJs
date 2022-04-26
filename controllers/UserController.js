const UserModel = require('../models/UserModel')
const bcrypt = require('bcryptjs');
module.exports =  {
    all: async (req,res)=>{
        const users = await UserModel.findMany()
        res.render('crud/all',{users})
    },
    add: async (req,res)=>{
        res.render('crud/add')
    },
    store: async (req,res)=>{
        const password = await bcrypt.hash(req.body.password,10)
        await UserModel.create({name:req.body.name,email:req.body.email,password:password})
        res.redirect('/users')
    },
    edit: async (req,res)=>{
        const user = await UserModel.findBy('id',+req.params.id)
        res.render('crud/update',{user})
    },
    update: async (req,res)=>{
        await UserModel.update({id:req.body.id,name:req.body.name,email:req.body.email})
        if(req.body.password){
            const password = await bcrypt.hash(req.body.password,10)
            await UserModel.updatePassword({id:req.body.id,password:password})
        }
        res.redirect('/users')
    },
    delete: async (req,res)=>{
        await UserModel.delete(req.body)
        res.redirect('/users')
    }
}