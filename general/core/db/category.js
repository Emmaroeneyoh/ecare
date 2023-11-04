const mongoose = require('mongoose')
const schema = mongoose.Schema

const Categoryschema = new schema({

        category: {
            type:String,
        },
        description:{
            type:String
        },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const CategoryModel = mongoose.model('Category', Categoryschema )
module.exports = {
    CategoryModel
}