import React, { Component } from 'react';
import './nomatch.css'

const NoMatch = props => {
    return (
        <div className="nomatch container center-align">
            <h1>Sorry, No route found. Please check url</h1>
            <h2>&gt;_&lt;</h2>
        </div>
    )
     
}

export default NoMatch;