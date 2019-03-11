import React from 'react'

import './Landing.css'

import pillarImage from './lady_justice.png'
import About from '../about/About'

function Landing() {
    return(
        <div className="landing">
            <div className="row">
                <figure className="col s12 m6">
                    <img src={pillarImage} alt="" />
                </figure>
            </div>
            <About/>
        </div>
    )
}

export default Landing
