import React from 'react'

import './Landing.css'
import pillarImage from './lady_justice.jpg'

import About from '../about/About'
import MailListForm from '../mail-list/MailListForm'

function Landing() {
    return(
        <div className="landing">
            <div className="row">
                <figure className="col s12 m6">
                    <img src={pillarImage} alt="" />
                </figure>
                <MailListForm />
            </div>
            <About/>
        </div>
    )
}

export default Landing
