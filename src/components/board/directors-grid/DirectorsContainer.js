import React, { Component } from 'react'

import './Directors.css'
import DirectorsGrid from './DirectorsGrid'
import Footer from '../../footer/Footer'

class DirectorsContainer extends Component {
    render() {

    const directorsGrid = this.props.directors.map(director => {
        return(
            <DirectorsGrid
                key={director.id}
                id={director.id}
                imageUrl={director.imageUrl}
                name={director.name}
                position={director.board_position}
                job={director.job}
                bio={director.bio}
            />
        )
    })

    return (
        <div id="leadership" className="row">
            <div className="board-info">
                <h5 className="board-title">Board of Directors</h5>
                <div id="board-row" className="row">
                    <p id="board-grid-p" className="col s12 m5">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>

            {directorsGrid}
            
            <div className="twitter">
                <Footer/>
            </div>
        </div>
    )
    }
}

export default DirectorsContainer
