const mongoose = require('mongoose')
const schema = mongoose.Schema

const Adminschema = new schema({

        email: {
            type:String,
        },
        password:{
            type:String
        },
        name:{
            type:String
        },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const AdminModel = mongoose.model('Admin', Adminschema )
module.exports = {
    AdminModel
}