const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: String,
  bookAvailable: Boolean
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
