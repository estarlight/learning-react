import React, { Component } from 'react';
import logo from './logo.svg';
import Square from './Square';
import InfoCard from './InfoCard';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="square">
      //   <Square tColor = "white" bgColor = "blue" />
      //   <Square tColor = "blue" bgColor = "red" />
      //   <Square tColor = "green" bgColor = "pink" />
      // </div>

      <div className="center">
        <InfoCard title = "A Very good title" description = "A block of text here" imgPath="./logo.svg" />
      </div>
    );
  }
}

export default App;
