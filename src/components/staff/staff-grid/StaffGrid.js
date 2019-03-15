import React from 'react'
import {
    Link
} from 'react-router-dom'

import StaffImage from '../StaffImage'

// class StaffGrid extends Component {

//     render() {
//         const pathname = `/staff/${this.props.name}`
//         return(
//             <Link to={pathname}>
//                 <div id="staff-card" className="col s12 m3 push-m3">
//                     <div className="card-image center small">
//                         <StaffImage
//                             name={this.props.name}
//                             imageUrl={this.props.imageUrl}
//                         />
//                     </div>
//                     <div className="card-content center">
//                         <h6 className="staff-card-name">{this.props.name}</h6>
//                         <p className="staff-card-title">{this.props.title}</p>
//                     </div>
//                 </div>
//             </Link>
//         )
//     }
// }

function StaffGrid(props) {
    // console.log(props)
    const pathname = `/staff/${props.name}`
    return(
        <Link to={pathname}>
            <div id="staff-card" className="col s12 m3 push-m3">
                <div className="card-image center small">
                    <StaffImage
                        name={props.name}
                        imageUrl={props.imageUrl}
                    />
                </div>
                <div className="card-content center">
                    <h6 className="staff-card-name">{props.name}</h6>
                    <p className="staff-card-title">{props.title}</p>
                </div>
                {/* <Staff/> */}
            </div>
        </Link>
    )
}

export default StaffGrid
