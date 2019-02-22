import React from 'react'
import image from '../images-board/placeholder.jpg'

function BoardImage(props) {
    const altTag = `Picture of ${props.name}`

    return (
        <img className="circle responsive-img" src={image} alt={altTag} />
    )
}

export default BoardImage
