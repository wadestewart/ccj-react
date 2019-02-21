import React, { Component } from 'react'
import data from '../../data'

import Header from '../header/Header' 
import DarkSquareImage from '../dark-square-logo/DarkSquareImage'
import GridContainer from '../board/board-grid/GridContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      board: data.boardData,
      staff: data.staffData
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <DarkSquareImage/>
        <GridContainer
          boardMembers={this.state.board}
        />
      </div>
    );
  }
}

export default App
