import React from 'react'

import './About.css'
import darkImage from '../../logos/ccj_landing_logo.jpg'

function About() {
    return (
        <div className="about">
            <figure className="center">
                <img src={darkImage} alt="CCJ Logo" />
            </figure>
            <h4 className="about-title">Who We Are</h4>
            <h5 className="about-subtitle">What We Believe</h5>
            <p>
                A fair and effective criminal justice system is essential to democracy and a core measure of our nation’s well-being.
            </p>
            <h5 className="about-subtitle">What We Seek</h5>
            <p>
                Our mission is to advance understanding of the criminal justice policy choices facing the nation and build consensus for solutions that enhance safety and justice for all.
            </p>
            <h5 className="about-subtitle">What We Do</h5>
            <p>
                We are an invitational membership organization and think tank, serving as a center of gravity and incubator of policy and leadership for the criminal justice field. Harnessing the experience and vision of the nation’s top experts, innovators, and influencers, we are a catalyst for actionable policies based on facts, evidence, and fundamental principles of justice. Through research and the collaborative initiatives of our diverse membership, the Council illuminates new pathways toward the fair and effective criminal justice system our nation needs and deserves.
            </p>
        </div>
    )
}

export default About
