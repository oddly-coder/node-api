const express = require('express')
const Books = require('../model/bookModel')
const router = express.Router()
const {
    createBook,
    getAllbooks,
    getSingleBook,
    deleteBook,
    updateBook
} = require('../controller/bookController')

//get all books
router.get('/', getAllbooks);

//get a single book
router.get('/:id', getSingleBook);

//post a new book
router.post('/', createBook);

//delete a book
router.delete('/:id', deleteBook);

//update a book
router.patch('/:id', updateBook);

module.exports = router;