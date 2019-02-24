import React from 'react'
// import image from './images-staff/placeholder.jpg'

function StaffImage(props) {
    console.log(props)
    const altTag = `Picture of ${props.name}`
    const imageUrl = props.imageUrl

    return (
        <figure>
            <img className="circle responsive-img" src={imageUrl} alt={altTag} />
        </figure>
    )
}

export default StaffImage
