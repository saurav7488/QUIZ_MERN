const mongoose = require('mongoose') 

const ResultSchema = new mongoose.Schema({
           username:{
                type:String
           },
           result:{
               type:Array,
               default:[]
           },
           attempt:{
               type:Number,
               default:0
           },
           points:{
                type:Number,
                default:0
           },
           achived:{
                type:String,
                default:''
           },
           createdAt:{
               type:Date,
               default:Date.now()
           }
})

const result = mongoose.model("result",ResultSchema) 

module.exports = result