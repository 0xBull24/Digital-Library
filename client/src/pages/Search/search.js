import React, { Component } from 'react';
import './search'

class Search extends Component {
    
    state = {
        q: '',
    };

    render() {
        return (
            <div className='container-fluid'>
                <h4>Book Search</h4>
                <div className='input-field col s12'>
                    <input placeholder='Book Title' id='book-title' type='text' className='validate'></input>
                    <button className='waves-effect waves-light btn right'>Search</button>
                </div>
            </div>
        )
    }
}

export default Search;
