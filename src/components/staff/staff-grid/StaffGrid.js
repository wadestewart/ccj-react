import React from 'react'
import {
    Link
} from 'react-router-dom'

import StaffImage from '../StaffImage'

function StaffGrid(props) {
    let pathname = `/staff/${props.name}`
    return(
        <Link to={pathname}>
            <div id="staff-card" className="col s12 m2">
                <div className="card-image center small">
                    <StaffImage
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

export default StaffGrid
