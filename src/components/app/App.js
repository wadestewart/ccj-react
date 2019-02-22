import React, { Component } from 'react'
import data from '../../data'

import Header from '../header/Header' 
import DarkSquareImage from '../dark-square-logo/DarkSquareImage'
import BoardContainer from '../board/board-grid/BoardContainer'
import StaffContainer from '../staff/staff-grid/StaffContainer'

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
        <BoardContainer
          boardMembers={this.state.board}
        />
        <StaffContainer
          staffMembers={this.state.staff}
        />
      </div>
    )
  }
}

export default App
