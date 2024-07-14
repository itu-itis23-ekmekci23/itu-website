import React from "react";
import './card.css';

function Card({ prop }) {
    return (
        <div className="card">
            <img src="sahibinden.png" alt={`${prop} logo`} />
            <p>Bu Card olacak. ({prop})</p>
        </div>
    )
}

export default Card;