import React from 'react'

import StaffImage from '../StaffImage'
import './Staff.css'

function Staff(props) {
    let staff = props.staff.find(staff => staff.name === props.match.params.name)
    return(
        <div className="container">
            <h2>{staff.name}</h2>
            <StaffImage
                name={staff.name}
                imageUrl={staff.imageUrl}
            />
            <h5>{staff.title}</h5>
            <div className="divider"></div>
            <p>{staff.bio}</p>
        </div>
    )
}

export default Staff
