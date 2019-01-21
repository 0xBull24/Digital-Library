import React, { Component } from 'react';
import Search from '../../components/Search'
import './search'

class SearchPage extends Component {
    
    state = {
        query: '',
        books: [],
    };

    handleSearch = event => {
        console.log('this is the target', event.target);
        const { target: { name, value } } = event;
        this.setState({
            [name]: value,
        });
        console.log(this.state);
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log();
        console.log('Clicking this button');


    }

    render() {
        return (
            <div className='container'>
                <Search
                value={ this.state.query }
                handleSearch={ this.handleSearch } 
                handleSubmit= { this.handleSubmit }
                />
            </div>
        )
    }
}

export default SearchPage;