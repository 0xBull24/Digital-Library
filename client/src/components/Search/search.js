import React from  'react';
import './search.css'

const Search = props => {
    console.log('These props', props);
    return(
        <div>
            <h4>Book Search</h4>
            <div className='input-field col s9'>
                <input
                    name='query'
                    placeholder='Book Title'
                    id='book_title'
                    type='text'
                    className='validate'
                    value={ props.name }
                    onChange={ props.handleSearch }>
                </input>
                <button 
                    className='waves-effect waves-light btn right'
                    onClick={ props.handleSubmit } >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search;