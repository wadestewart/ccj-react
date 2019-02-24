import React from 'react'

function StaffImage(props) {
    const altTag = `Picture of ${props.name}`

    return (
        <figure>
            <img className="circle responsive-img" src={props.imageUrl} alt={altTag} />
        </figure>
    )
}

export default StaffImage
