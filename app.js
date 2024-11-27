require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
const morgan = require('morgan')
const PORT = 3000
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`connected to mongoose ${mongoose.connection.name}`)
})
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))

// Home Route
app.get('/', (req, res) => {
  res.render('index.ejs')
})
//require
const Book = require('./model/books.js')
const { compile } = require('ejs')

app.get('/books', async (req, res) => {
  const allBooks = await Book.find()
  res.render('books/index.ejs', { books: allBooks })
})

app.get('/books/new', (req, res) => {
  res.render('books/new.ejs')
})

app.post('/books', async (req, res) => {
  if (req.body.yourFav === 'on') {
    req.body.yourFav = true
  } else {
    req.body.yourFav = false
  }

  await Book.create(req.body)
  res.redirect('/books')
})

app.delete('/books/:bookId', async (req, res) => {
  await Book.findByIdAndDelete(req.params.fruitId)
  res.redirect('/books')
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
