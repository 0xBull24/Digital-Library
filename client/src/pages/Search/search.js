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
        console.log('state', this.state);
        console.log('Clicking this button');
    }

    render() {
        return (
            <div className='container center-align'>
                <h4>Book Search</h4>
                <div className="row center-align">
                    <div className="col s12 center-align">
                        <div className='input-field col s6 push-s3'>
                            <input 
                                placeholder='Book Title' 
                                name='query' 
                                type='text' 
                                className='validate'
                                value={ this.state.query }
                                onChange= { this.handleSearch }>
                            </input>
                        </div>
                        <div className='input-field'>
                            <button 
                                className='waves-effect waves-light btn right'
                                onClick={ this.handleSubmit }>
                                Look for books
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;