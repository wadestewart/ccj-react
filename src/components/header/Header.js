import React, { Component } from 'react'

import './Header.css'
import navLogo from '../../logos/ccj_logo_nav.png'
import M from 'materialize-css'

class Header extends Component {

    componentDidMount = () => {
        M.AutoInit()
    }

    render() {
        return (
            <div className="navbar-fixed">
                <ul id="dropdown1" className="dropdown-content">
                    <li><a id="nav-text" href="#leadership">BOARD OF DIRECTORS</a></li>
                    <li><a id="nav-text" href="#trustees">STAFF</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper">
                            <a href="#!" className="brand-logo">
                                <img className="responsive-img" src={navLogo} alt="CCJ Logo" />
                            </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a id="nav-text" href="#about">ABOUT</a></li>
                            <li><a id="nav-text" className="dropdown-trigger" href="#!" data-target="dropdown1">LEADERSHIP<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a id="nav-text" href="#contact">CONTACT</a></li>
                            <li><a id="nav-text" href="https://moz.com/beginners-guide-to-seo" rel="noopener noreferrer" target='_blank'>SUPPORT US</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            // <div className="header">
            //     <nav>
            //         <h2 onClick={this.props.onReload}>Art Education</h2>
            //         <h3>Equal parts ignorance and bliss</h3>
            //     </nav>
            // </div>
        )
    }
}

export default Header
