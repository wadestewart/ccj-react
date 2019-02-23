import React from 'react'
import BoardImage from './BoardImage'

function Director(props) {
    console.log(props)
    return(
        <div className="container">
            {/* <h2></h2> */}
                <BoardImage/>
        </div>
    )
}

export default Director
