import React, { Component } from 'react'

import BoardGrid from './BoardGrid'

class GridContainer extends Component {
    render() {
        
    const boardGrid = this.props.boardMembers.map(member => {
        return(
            // console.log(member)
            <BoardGrid
                key={member.id}
                imgUrl={member.image}
                name={member.name}
                position={member.board_position}
                job={member.job}
                bio={member.bio}
            />
        )
    })

    return (
        <div>
            {boardGrid}
        </div>
    )
    }
}

export default GridContainer
