
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    authors: { type: [String], required: true},
    description: {type: String, required: true},
    number_of_pages: {type: Number, required: true},
    language: {type: String, required: true},
    subKey: {type: String, required: true},
    status: {type: String, required: true},
    image: {type: String, required: true},
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book; 