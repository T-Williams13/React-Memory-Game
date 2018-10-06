import React from "react";
import "./PicCard.css";

const PicCard = props => (
    <div onClick={() => props.scoreCounter(props.id)} className="card">
        <img alt={props.name} src={props.image} /> 
    </div>
   
);

export default PicCard;

// onClick={() => props.scoreCounter(props.id)}