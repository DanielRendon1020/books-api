const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

 const Book = mongoose.model('Books', bookSchema)
 
 module.exports = Book