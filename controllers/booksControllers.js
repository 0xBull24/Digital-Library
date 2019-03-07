const db = require('../models');

module.exports = {
    // Find all books
    findAll: function(req, res) {
        db.Book
           .find(req.query)
           .sort({date: - 1})
           .then(response =>  res.json(response))
           .catch(err => { res.status(400).json(err)});
    },
    // Create a book for the library
    create: function(req, res) {
        db.Book
          .create(req.body)
          .then(response => res.status(201).json(response))
          .catch(err => {res.status(400).json(err)});
    },
    // Remove a book from the list
    remove: function(req, res) {
        db.Book
          .findById({ _id: req.params.id })
          .then(response => response.remove())
          .then(response => res.status(200).json(response))
          .catch(err => res.status(400).json(err));
    },
};