import React from "react";
import './card.css';

function Card({ prop }) {
    return (
        <div className="card">
            <div className="image">
                <img src={`https://raw.githubusercontent.com/omerfarukekmekci/itu-website/master/public/logos/${prop}.png`} alt={`${prop} logo`} />
            </div>
            <div className="text">
                <p>Bu Card olacak. ({prop})</p>
            </div>
        </div>
    )
}

export default Card;