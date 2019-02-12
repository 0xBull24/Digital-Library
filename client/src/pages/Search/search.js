import React, { Component } from 'react';
import './search'

class Search extends Component {
    
    state = {
        q: '',
    };

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

export default Search;
