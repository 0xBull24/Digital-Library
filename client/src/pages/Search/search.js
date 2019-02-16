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

    componentDidMount() {
        API.getBooks('harry potter')
        .then(res => {
            this.setState({ books: res.data.items});
            console.log('Books', this.state.books);
        })
        .catch(err => console.log('err', err)
        );
    }

    render() {
        return (
            <div>
                <Search />
                <div className="row center-align">
                    {
                        this.state.books.map((book, index) => (
                            <Card 
                                key={ index }
                                title={ book.volumeInfo.title}
                                image={ book.volumeInfo.imageLinks.smallThumbnail }
                                description={ book.searchInfo.textSnippet }
                                info={ book.volumeInfo.infoLink}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;