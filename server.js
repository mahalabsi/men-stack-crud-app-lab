require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`connected to mongoose ${mongoose.connection.name}`)
})

// Home Route
app.get('/', (req, res) => {
  res.render('index.ejs')
})
//require
// const Book = require('./models/books.js')

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})

// app.get("/books/new", (req, res) => {
//   res.render("books/new.ejs");
// });
// app.get("/books/new", (req, res) => {
//   res.send("This sends something!")
// })
