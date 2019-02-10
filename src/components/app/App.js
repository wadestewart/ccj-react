import React, { Component } from 'react'

import Header from '../header/Header' 
import DarkSquareImage from '../dark-square/DarkSquareImage'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DarkSquareImage />
      </div>
    );
  }
}

export default App
