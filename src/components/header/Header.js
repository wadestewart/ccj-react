import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div class="navbar-fixed">
                <nav>
                    <div class="nav-wrapper">
                        <a href="#!" class="brand-logo">Logo</a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
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
