const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: { type: String, required: true },
    image: { type: String, required: true, default:'https://via.placeholder.com/250x250' },
    link: { type: String, required: true, default: 'https://play.google.com/books' }
});

const Book = mongoose.model('Books', bookSchema);

module.exports = Book;