import React, { Component } from 'react'

import data from '../../data'
import './App.css'

import Header from '../header/Header'
import Landing from '../landing-page/Landing'
import About from '../about/About'
import BoardContainer from '../board/board-grid/BoardContainer'
import StaffContainer from '../staff/staff-grid/StaffContainer'
import MailListForm from '../contact/MailListForm'

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
          <div className="main">
            <About/>
            <BoardContainer
              boardMembers={this.state.board}
            />
            <StaffContainer
              staffMembers={this.state.staff}
            />
            <div className="row">
              <MailListForm/>
              {/* <Contact/> */}
            </div>
          </div>
      </div>
    )
  }
}

export default App
