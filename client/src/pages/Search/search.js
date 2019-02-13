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
            <div className='container-fluid center-align'>
                <h4>Book Search</h4>
                <div className="row center-align">
                    <div className="col s12 center-align">
                        <div className='input-field col s6 push-s3'>
                            <input placeholder='Book Title' id='book-title' type='text' className='validate'></input>
                        </div>
                        <div className='input-field'>
                            <button className='waves-effect waves-light btn right'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;