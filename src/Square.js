import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Square = (props) => {
    return <h1 style = {{color: props.tColor, backgroundColor: props.bgColor}}>{props.tColor} on {props.bgColor}</h1>
}

export default Square;