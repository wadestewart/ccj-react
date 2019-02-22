import React from 'react'

import BoardImage from './BoardImage'

function BoardGrid(props) {
    // console.log(props)
    return(
        <div className="col s12 m3">
            <div className="card-image center small">
                    <BoardImage
                        name={props.name}
                    />
            </div>
            <div className="card-content center">
                <h6>{props.name}</h6>
            </div>
        </div>
    )
}

export default BoardGrid
