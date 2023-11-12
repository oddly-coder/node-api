const express = require("express");
const booksRoute = require("./routes/booksRoute")
const mongoose = require("mongoose")

const app = express();

require('dotenv').config()

const port  = process.env.PORT || 3000

//midlleware
app.use(express.json())
app.use('/api/books', booksRoute);

//DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(port, ()=>{
            console.log("connected to DB and app is running on port", port)
        })
    })
    .catch(error=>console.log(error))