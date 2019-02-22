const axios = require('axios');

export default {

    // Get all books from google
    getBooks: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    // Get all saved books
    getSavedBooks: () => {
        return axios.get(`/api/books/`);
    },

    // Save books to library
    saveBook: (book) => {
        return axios.post('/api/books', book);
    },

    // Delete / Remove books from library
    deleteBook: (id) => {
        return axios.delete('/api/books/:id', id);
    }
}