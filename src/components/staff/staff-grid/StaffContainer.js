import React, { Component } from 'react'

import './Staff.css'
import StaffGrid from './StaffGrid'

class StaffContainer extends Component {
    render() {

    const staffGrid = this.props.staffMembers.map(member => {
        return(
            <StaffGrid
                key={member.id}
                imgUrl={member.image}
                name={member.name}
                title={member.title}
                bio={member.bio}
            />
        )
    })

    return (
        <div id="staff" className="row">
            <h5 className="staff-title">Staff</h5>
            {staffGrid}
        </div>
    )
    }
}

export default StaffContainer
