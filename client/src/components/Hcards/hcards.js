import React from 'react'
import './hcard.css'

const HCard = props => {
    return(
        <div className="col s6">
            <div className="card horizontal ch hoverable z-depth-3">
            <div className="card-image">
                <img className="hcard-images" src={props.image} alt="saved book cover" />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <h5>{props.title}</h5>
                <p><strong>Authors:</strong> {props.authors}</p>
                <br/>
                <p>{props.description}</p>
                </div>
                <div className="card-action">
                <button id={props.id} className="waves-effect btn green" onClick={props.delete}>Delete</button>
                <a className="waves-effect btn green" href={props.link} target="_blank" rel="noopener noreferrer">More Info</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HCard;