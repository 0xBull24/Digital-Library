import React, { Component } from  'react';
import './search.css'

class Search extends Component {
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
        console.log('state', this.state);
        console.log('Clicking this button');
    }


    render(){
        return(
            <div className="row center-align">
                <h4>Book Search</h4>
                <div className='input-field col s6 push-s3'>
                    <input
                        name='query'
                        placeholder='Book Title'
                        type='text'
                        className='validate'
                        value={ this.name }
                        onChange={ this.handleSearch }>
                    </input>
                    <button 
                        className='waves-effect waves-light btn amber'
                        onClick={ this.handleSubmit } >
                        Search
                    </button>
                </div>
            </div>
        )
    }
}

export default Search;