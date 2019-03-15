import React, { Component } from 'react'

import './StaffGrid.css'
import StaffGrid from './StaffGrid'

class StaffContainer extends Component {
    render() {

    const staffGrid = this.props.staffMembers.map(member => {
        return(
                <StaffGrid
                    key={member.id}
                    imageUrl={member.imageUrl}
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    // staffMembers={this.props.staffMembers}
                />
        )
    })

    return (
        <div id="staff" className="row">
            <h5 className="staff-title center">Team</h5>
            <p className="staff-grid-p center">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            {staffGrid}
        </div>
    )
    }
}

export default StaffContainer
