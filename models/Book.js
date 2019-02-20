let mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    Title: String,
    Author: String,
    Plot: String,
    // unique: true
});

const  Book = mongoose.model("Book", BookSchema);

module.exports = Book;