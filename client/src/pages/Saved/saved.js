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

    render() {
        return (
            <div className="container card-container center-align">
            {
                this.state.books.map((book, index) => (
                    <HCard
                        key={ index }
                        id={ index }
                        title={ book.title }
                        authors={ book.authors}
                        link={ book.link }
                        image= { book.image }
                    />
                ))
            }
            </div>
        )
    }
}

export default Saved;