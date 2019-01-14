const db = require('./models');

module.exports = {
    // Find all books
    findAll: (req, res) => {
        db.Book
           .find(req.query)
           .sort({date: - 1})
           .then(response =>  res.json(response))
           .catch(err => { res.status(400).json(err)});
    },
    // Find a specific book
    findByID: (req, res) => {
        db.Book
          .findByID(req.params.id)
          .then(response => res.json(response))
          .catch(err => res.status(400).json(err));
    },
    // Create a book for the library
    create: (req, res) => {
        db.Book
          .create(req.body)
          .then(response => res.status(201).json(response))
          .catch(err => {res.status(400).json(err)});
    },
    //  Update a given book list
    update: (req, res) => {
        db.Book
          .findOneAndUpdate({_id: req.params.id}, req.body)
          .then(response =>  res.status(200).json(response))        
          .catch(err => res.status(400).json(err));
    },
    // Remove a book from the list
    remove: (req, res) => {
        db.Book
          .findByID({ _id: req.params.id })
          .then(response => response.remove())
          .then(response => res.status(200).json(response))
          .catch(err => res.status(400).json(err));
    },
};