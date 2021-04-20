
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    authors: { type: [String], required: true},
    description: {type: String, required: true},
    Image: {type: String, required: true},
    link: {type: String, required: true},
    number_of_pages: {type: Number, required: true},
    language: {type: String, required: true},
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book; 