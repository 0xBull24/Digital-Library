import React from 'react'
// import style from './card.css'

const Card = props => {
    return(
            <div className="col s12 m5 push-m1">
                <div className="card">
                    <div className="card-image">
                        <img src={props.image} alt="book cover"></img>
                        <span className="card-title">{props.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{props.description}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">Save</a>
                        <a href={props.info} target="_blank" rel="noopener noreferrer">View More</a>
                    </div>
                </div>
            </div>
    )
}

export default Card;