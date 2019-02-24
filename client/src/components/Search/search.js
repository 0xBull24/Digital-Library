import React from  'react';
import './search.css'

const Search = props => {

    return(
        <div className="row center-align">
            <div className='input-field col s6 push-s3'>
                <input
                    name='query'
                    placeholder='Book Title'
                    type='text'
                    className='validate'
                    value={ props.name }
                    onChange={ props.handleSearch }>
                </input>
                <button 
                    className='waves-effect waves-light btn green'
                    onClick={ props.handleSubmit } >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search;