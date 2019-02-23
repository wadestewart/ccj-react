import React, { Component } from 'react'

import './Board.css'
import BoardGrid from './BoardGrid'

class BoardContainer extends Component {
    render() {

    const directorsGrid = this.props.directors.map(director => {
        return(
            <BoardGrid
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

export default BoardContainer
