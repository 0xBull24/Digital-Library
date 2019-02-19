import React from 'react'
import './card.css'

const Card = props => {
    return(
            <div className="col s12 m6 push-m2">
                <div className="card">
                    <div className="card-image">
                        <img src={props.image} alt="book cover"></img>
                    </div>
                    <div className="card-content">
                        <p><strong>{props.title}</strong></p>
                    </div>
                    <div className="card-action">
                        <a href={props.save}>Save</a>
                        <a href={props.info} target="_blank" rel="noopener noreferrer">View More</a>
                    </div>
                </div>
            </div>
    )
}

export default Card;