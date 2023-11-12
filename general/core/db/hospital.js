const mongoose = require('mongoose')
const schema = mongoose.Schema



const Hospitalschema = new schema({
       name: {
            type:String,
        },
        easting:{
            type:String
        },
        northing:{
            type:String
        },
        ownership:{
            type:String
        },
        address:{
            type:String
        },
        type:{
            type:String
        },
        facility_type:{
            type:String
        },
        ward: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Ward'
    },
    category: {
        default: [],
        type: [
          {
            categoryid: {
            type:  mongoose.Schema.Types.ObjectId,
             ref:'Category'
    },
          },
        ],
    },
    image: {
        default: [],
        type: [
          {
            url: {
              type: String,
            },
          },
        ],
      },
       
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const HospitalModel = mongoose.model('Hospital', Hospitalschema )
module.exports = {
    HospitalModel
}