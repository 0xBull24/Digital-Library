import React, { Component } from 'react';
import './search'
import Search from '../../components/Search'
// import Card from '../../components/cards'

import API from '../../utils/api';

class SearchPage extends Component {
    
    state = {
        query: '',
        books: [],
    };

    componentDidMount() {
        API.getBooks('harry potter')
        .then(res => {
            res.data.items.forEach(element => {
                console.log('Google book info', element);
            });;
        })
        .catch(err => console.log('err', err)
        );
    }

    render() {
        return (
            <Search />
        )
    }
}

export default SearchPage;