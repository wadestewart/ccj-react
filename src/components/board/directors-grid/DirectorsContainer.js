import React, { Component } from 'react'

import './Directors.css'
import DirectorsGrid from './DirectorsGrid'

class DirectorsContainer extends Component {
    render() {

    const directorsGrid = this.props.directors.map(director => {
        return(
            <DirectorsGrid
                key={director.id}
                id={director.id}
                imgUrl={director.image}
                name={director.name}
                position={director.board_position}
                job={director.job}
                bio={director.bio}
            />
        )
    })

    return (
        <div id="leadership" className="row">
            <h5 className="board-title">Board of Directors</h5>
            {directorsGrid}
        </div>
    )
    }
}

export default DirectorsContainer
