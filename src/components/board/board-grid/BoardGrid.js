import React from 'react'

import BoardImage from './BoardImage'

function BoardGrid(props) {
    // console.log(props)
    return(
        <div>
        <BoardImage
            imgUrl={props.imgUrl}
            name={props.name}
        />
            <h1>{props.name}</h1>
        </div>
    )
}

export default BoardGrid
