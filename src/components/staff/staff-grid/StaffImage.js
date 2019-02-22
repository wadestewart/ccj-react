import React from 'react'
import image from '../images-staff/placeholder.jpg'

function StaffImage(props) {
    console.log(props)
    const altTag = `Picture of ${props.name}`

    return (
        <img class="circle responsive-img" src={image} alt={altTag} />
    )
}

export default StaffImage
