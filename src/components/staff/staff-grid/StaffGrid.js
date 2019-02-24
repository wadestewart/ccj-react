import React from 'react'
import {
    Link
} from 'react-router-dom'

import StaffImage from '../StaffImage'

function StaffGrid(props) {
    console.log(props)
    const pathname = `/staff/${props.name}`
    // const altTag = `Picture of ${props.name}`
    // const imageUrl = props.imageUrl
    return(
        <Link to={pathname}>
            <div id="staff-card" className="col s12 m3">
                <div className="card-image center small">
                    {/* <figure>
                        <img src={imageUrl} alt={altTag} />
                    </figure> */}
                    <StaffImage
                        name={props.name}
                        imageUrl={props.imageUrl}
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
