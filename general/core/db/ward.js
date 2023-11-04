const mongoose = require('mongoose')
const schema = mongoose.Schema

const Wardschema = new schema({

        ward: {
            type:String,
        },
        
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const WardModel = mongoose.model('Ward', Wardschema )
module.exports = {
    WardModel
}