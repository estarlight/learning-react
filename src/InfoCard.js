import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const InfoCard = (props) => {
    return (
        <div>
        <img src = {`${props.imgPath}`} />
        
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </div>

    )
}

export default InfoCard;