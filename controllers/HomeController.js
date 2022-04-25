const UserModel = require('../models/UserModel')
module.exports =  {
    index:(req,res)=>{
        res.render('welcome')
        // res.send(UserModel.findMany())
    }
}