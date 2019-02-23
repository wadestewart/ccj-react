import React, { Component } from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import data from '../../data'
import './App.css'

import Header from '../header/Header'
import Landing from '../landing-page/Landing'
import About from '../about/About'
import BoardContainer from '../board/board-grid/BoardContainer'
import Director from '../board/Director'
import StaffContainer from '../staff/staff-grid/StaffContainer'
import Contact from '../contact/Contact'

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
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/directors" render={() => <BoardContainer boardMembers={this.state.board} />} />
            <Route path="/directors/:id" render={(props) => <Director {...props} board={this.state.board} />} />
            <Route exact path="/staff" render={() => <StaffContainer staffMembers={this.state.staff} />} />
            <div className="row">
              <Contact/>
            </div>
            <Route path="/*" render={() => <Redirect to="/" />} />
          </Switch>
          </div>
      </div>
    )
  }
}

export default App
