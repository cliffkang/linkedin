import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Heading from './components/Heading/Heading.js';
import Ad from './components/Ad/Ad.js';
import LeftColumn from './components/LeftColumn/LeftColumn.js';
import CenterColumn from './components/CenterColumn/CenterColumn.js';
import RightColumn from './components/RightColumn/RightColumn.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Ad />
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </div>
    );
  }
}

export default App;
