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
// import About from '../about/About'
import DirectorsContainer from '../board/directors-grid/DirectorsContainer'
import Director from '../board/director/Director'
// import StaffContainer from '../staff/staff-grid/StaffContainer'
import Staff from '../staff/staff-member/Staff'
// import Contact from '../contact/Contact'

class App extends Component {
  constructor() {
    super()
    this.state = {
      directors: data.directorsData,
      staff: data.staffData
    }
  }

  render() {
    return (
      <div>
        <Header/>
          <div className="main">
          <Switch>
            <Route exact path="/" render={() => <Landing staffMembers={this.state.staff} /> } />
            <Route exact path="/directors" render={() => <DirectorsContainer directors={this.state.directors} />} />
            <Route path="/directors/:name" render={(props) => <Director {...props} directors={this.state.directors} />} />
            {/* <Route exact path="/staff" render={() => <StaffContainer staffMembers={this.state.staff} />} /> */}
            <Route path="/staff/:name" render={(props) => <Staff {...props} staff={this.state.staff} />} />
            <Route path="/*" render={() => <Redirect to="/" />} />
          </Switch>
          </div>
      </div>
    )
  }
}

export default App
