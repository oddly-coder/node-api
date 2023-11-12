const mongoose = require("mongoose")

const Schema = mongoose.Schema

//creating a schema for our model
const bookSchema = new Schema({
    author:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    pages:{
        type:Number,
        required:true
    }

}, {timestamps: true})

//exporting the model
module.exports = mongoose.model('books', bookSchema)