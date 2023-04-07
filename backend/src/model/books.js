const mongoose = require("mongoose");

const bookSchema= new mongoose.Schema({
    title:{
        type: String
    },
    author: {
        type: String
    },
    description:{
        type: String
    },
    publisher: {
        type: String
    },
    published_date: {
        type: Date
    }
})

const books= new mongoose.model('books',bookSchema);
module.exports= books;