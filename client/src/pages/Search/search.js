import React, { Component } from 'react';
import './search'
import Search from '../../components/Search'
import Card from '../../components/cards'

import API from '../../utils/api';

class SearchPage extends Component {
    
    state = {
        query: '',
        books: [],
    };

    // Grabbing random 'Harry Potter Books'
    componentDidMount() {
        API.getBooks('harry potter')
        .then(res => {
            this.setState({ books: res.data.items});
            console.log('Books', this.state.books);
        })
        .catch(err => console.log('err', err)
        );
    }

    // As a user types, grab the input in the search bar
    handleSearch = event => {
        console.log('this is the target', event.target);
        const { target: { name, value } } = event;
        this.setState({
            [name]: value,
        });
        console.log(this.state);
    }

    // Search for the users input
    handleSubmit = event => {
        event.preventDefault();
        console.log('state', this.state);
        API.getBooks(this.state.query)
        .then(res => {
            this.setState({ 
                query: '',
                books: res.data.items
            });
        })
        .catch(err => {
            console.log('err', err);
        });
    }

    // Saving the book to the db
    saveBook = event => {
        const book = this.state.books[event.target.id].volumeInfo;
        const savedBook = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.imageLinks.smallThumbnail,
            link: book.infoLink,
        };

        // Call api to save book
        API.saveBook(savedBook)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('Error', err);
        });
    }

    render() {
        return (
            <div>
                <Search
                  name={ this.state.query }
                  handleSearch={ this.handleSearch }
                  handleSubmit={ this.handleSubmit }
                />
                <div className="row center-align">
                    {
                        this.state.books.map((book, index) => (
                            <Card 
                                key={ index }
                                id={ index }
                                title={ book.volumeInfo.title}
                                image={ book.volumeInfo.imageLinks.smallThumbnail }
                                info={ book.volumeInfo.infoLink}
                                save={ this.saveBook }
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;