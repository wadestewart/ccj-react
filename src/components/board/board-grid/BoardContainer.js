import React, { Component } from 'react'

import './Board.css'
import BoardGrid from './BoardGrid'

class BoardContainer extends Component {
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
        <div id="leaderhip" className="row">
            <h5 className="board-title">Board of Directors</h5>
            {boardGrid}
        </div>
    )
    }
}

export default BoardContainer
