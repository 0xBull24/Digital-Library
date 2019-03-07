import React, { Component } from 'react';
import './saved.css';
import API from '../../utils/api';
import HCard from '../../components/Hcards';

class Saved extends Component {

    state = {
        books: [],
    }

    // Grab all books from database on load
    componentDidMount() {
        API.getSavedBooks()
        .then(res => {
            this.setState({ books: res.data });
            console.log(this.state);
        })
        .catch(err => {
            console.log('Database retrieve Error', err);
        });
    }

    // Remove a book from the library
    deleteBook = event => {
        let bookId = this.state.books[event.target.id]._id;
        API.deleteBook(bookId)
        .then( () => {
            API.getBooks()
            .then(res => {
                this.setState({ books: res.data});
            })
            .catch(err => {
                console.log('Pulling Book Error - ', err);
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="container card-container center-align">
                <div className="row">
                    {
                        this.state.books.map((book, index) => (
                            <HCard
                                key={ index }
                                id={ index }
                                title={ book.title }
                                authors={ book.authors }
                                description={ book.description }
                                link={ book.link }
                                image={ book.image }
                                delete={ this.deleteBook }
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Saved;