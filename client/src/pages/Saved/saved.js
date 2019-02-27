import React, { Component } from 'react';
import './saved.css';
import API from '../../utils/api';

class Saved extends Component {

    state = {
        books: [],
    }

    // Grab all books from database on load
    componentDidMount() {
        API.getSavedBooks()
        .then(res => {
            console.log(res.data)
            this.setState({ books: res.data })
        })
        .catch(err => {
            console.log('Database retrieve Error', err);
        });
    }

    render() {
        return (
            <div className="center-align">
                <h1>Books returned here</h1>
            </div>
        )
    }
}

export default Saved;