import React from 'react'

import BoardImage from '../BoardImage'
import './Director.css'

function Director(props) {
    console.log(props)
    let director = props.directors.find(director => director.name === props.match.params.name)
    return(
        <div className="container">
            <h2>{director.name}</h2>
            <BoardImage/>
            <h4>{director.board_position}</h4>
            <div className="divider"></div>
            <h5>{director.job}</h5>
            <p>{director.bio}</p>
        </div>
    )
}

export default Director
