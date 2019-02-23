import React from 'react'
import './card.css'

const Card = props => {
    return(
            <div className="col s3">
                <div className="card hoverable z-depth-3">
                    <div className="card-image">
                        <img src={props.image} alt="book cover"></img>
                    </div>
                    <div className="card-content">
                        <p><strong>{props.title}</strong></p>
                    </div>
                    <div className="card-action">
                        <button id={props.id} className="waves-effect btn amber" onClick={props.save}>Save</button>
                        <button className="waves-effect btn amber" href={props.info} target="_blank" rel="noopener noreferrer">View More</button>
                    </div>
                </div>
            </div>
    )
}

export default Card;