import React, { Component } from 'react';
import './App.css';
import dummyData from './dummyData';
// import styled from 'styled-components';
import Heading from './components/Heading/Heading.js';
import LeftColumn from './components/LeftColumn/LeftColumn.js';
import CenterColumn from './components/CenterColumn/CenterColumn.js';
import RightColumn from './components/RightColumn/RightColumn.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <div>
          <p></p>
          <p>Ad</p>
          <img alt='options'/>
        </div>
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </div>
    );
  }
}

export default App;
