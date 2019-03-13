import React from 'react'

import './Landing.css'
import pillarImage from './lady_justice.jpg'

import About from '../about/About'
import MailListForm from '../mail-list/MailListForm'
import StaffContainer from '../staff/staff-grid/StaffContainer'
import Footer from '../footer/Footer'

function Landing(props) {
    // console.log(props)

    return(
        <div className="landing">
            <div id="first-lander" className="row">
                <figure className="col s12 m6">
                    <img src={pillarImage} alt="" />
                </figure>
                <MailListForm />
            </div>
            <div className="about">
                <About/>
            </div>
            <StaffContainer staffMembers={props.staffMembers} />
            <div className="twitter">
                <Footer/>
            </div>
        </div>
    )
}

export default Landing
