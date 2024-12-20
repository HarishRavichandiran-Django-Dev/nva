import React from "react";

function Card({title, description, image}) {
    return (
        <div className="card shadow-sm mb-3 mx-auto" style={{width: '25rem'}}>
            <img src={image} className="card-img-top rounded-top" alt={title} />
            <div className="card-body bg-light rounded">
                <h5 className="card-title text-primary">{title}</h5>
                <p className="card-text text-muted">{description}</p>
                <a href="#" className="btn btn-outline-primary">View Course</a>
            </div>
        </div>
    )
}

export default Card;