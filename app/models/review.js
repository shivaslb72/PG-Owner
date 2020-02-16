const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    rating:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true,
        
    },
    tanent:{
        type:Schema.Types.ObjectId,
        required:true
    },
    building:{
        type:Schema.Types.ObjectId,
        required:true
    }
})

const Review = mongoose.model('Review',reviewSchema)
module.exports = Review