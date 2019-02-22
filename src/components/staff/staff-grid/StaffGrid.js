import React from 'react'

import StaffImage from './StaffImage'

function StaffGrid(props) {
    // console.log(props)
    return(
        <div id="staff-card" className="col s12 m3">
            <div className="card-image center small">
                <StaffImage
                    name={props.name}
                />
            </div>
            <div className="card-content center">
                <h6>{props.name}</h6>
            </div>
        </div>
    )
}

export default StaffGrid
