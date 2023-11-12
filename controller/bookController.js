const Books = require('../model/bookModel');
const mongoose = require('mongoose');

//create a book
const createBook = async(req, res)=>{
    const {author, title, pages} = req.body
    try{
        const book = await Books.create({author, title, pages})
        res.status(200).json(book)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({msg:"Add a new book"})
}

//get all books
const getAllbooks = async(req, res)=>{
    const books = await Books.find({}).sort({createdAt: -1})
    res.status(200).json(books)
}

//get a single book
const getSingleBook = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"invalid id"})
    }

    const book= await Books.findById(id)
    if(!book){
        res.status(404).json({error:"book not found"})
    }
    res.status(200).json(book)
}

//delete a book
const deleteBook = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"invalid id"})
    }
    const book= Books.findOneAndDelete({_id:id})
    if(!book){
        res.status(404).json({error:"book not found"})
    }
    res.status(200).json({msg:"book deleted"})
}

//update a book
const updateBook = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"invalid id"})
    }
    const book= Books.findOneAndUpdate({_id:id},
        {...req.body})
    if(!book){
        res.status(404).json({error:"book not found"})
    }
    res.status(200).json({msg:"books updated"})
}

module.exports = {
    createBook,
    getAllbooks,
    getSingleBook,
    deleteBook,
    updateBook
}