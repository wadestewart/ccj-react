import React from 'react'
import {
    Link
} from 'react-router-dom'

import BoardImage from '../BoardImage'

function BoardGrid(props) {
    let pathname = `/directors/${props.name}`
    return(
        <Link to={pathname}>
        <div id="board-card" className="col s12 m2">
            <div className="card-image center small">
                <BoardImage
                    name={props.name}
                />
            </div>
            <div className="card-content center">
                <h6>{props.name}</h6>
            </div>
        </div>
        </Link>
    )
}

export default BoardGrid
