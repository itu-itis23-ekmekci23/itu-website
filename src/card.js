import React from "react";
import './card.css';

function Card({ name, linkname, explanation }) {
    return (
        <div className="card br4" >
            <div id="imagediv" className="image">
                <a href="https://www.google.com">
                    <img className="br4" src={`https://raw.githubusercontent.com/omerfarukekmekci/itu-website/master/public/logos/${linkname}.png`} alt={`${name} logo`} />
                </a>
            </div>
            <div className="text">
                <a href="https://www.google.com">
                    <p id="cardname" className="cardtext">{name}</p>
                    <p id="cardexpl" className="cardtext">{explanation}</p>
                </a>
            </div>
        </div>
    )
}

export default Card;