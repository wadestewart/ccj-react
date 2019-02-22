import React from 'react'
import image from '../images-board/placeholder.jpg'

function BoardImage(props) {
    console.log(props)
    const altTag = `Picture of ${props.name}`

    return (
        <img class="circle responsive-img" src={image} alt={altTag} />
    )
}

export default BoardImage
