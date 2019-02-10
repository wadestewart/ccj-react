import React, { Component } from 'react'

import './Header.css'
import navLogo from '../../imgs/ccj_logo_nav.png'
import M from 'materialize-css'

class Header extends Component {

    componentDidMount = () => {
        M.AutoInit()
    }

    render() {
        return (
            <div class="navbar-fixed">
                <ul id="dropdown1" class="dropdown-content">
                    <li><a class="nav-scroll" href="#leadership">BOARD OF DIRECTORS</a></li>
                    <li><a class="nav-scroll" href="#trustees">BOARD OF TRUSTEES</a></li>
                </ul>
                <nav>
                    <div class="nav-wrapper">
                            <a href="/" class="brand-logo">
                                <img className="responsive-img" src={navLogo} alt="CCJ Logo" />
                            </a>
                        <ul class="right hide-on-med-and-down">
                            <li><a id="nav-text" href="#about">ABOUT</a></li>
                            <li><a id="nav-text" class="dropdown-trigger" href="#!" data-target="dropdown1">LEADERSHIP<i class="material-icons right">arrow_drop_down</i></a></li>
                            <li><a id="nav-text" href="#contact">CONTACT</a></li>
                            <li><a id="nav-text" href="https://moz.com/beginners-guide-to-seo" target='_blank'>SUPPORT US</a></li>
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
