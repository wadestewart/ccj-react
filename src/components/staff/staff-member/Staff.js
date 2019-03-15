import React from 'react'
// import M from "materialize-css"

import StaffImage from '../StaffImage'
import './Staff.css'
import "materialize-css/dist/css/materialize.min.css"

// class Staff extends Component {

//     componentDidMount() {
//         const options = {
//           onOpenStart: () => {
//             console.log("Open Start")
//           //   console.log(this.props)
//           },
//           onOpenEnd: () => {
//             console.log("Open End")
//           },
//           onCloseStart: () => {
//             console.log("Close Start")
//           },
//           onCloseEnd: () => {
//             console.log("Close End")
//           },
//           inDuration: 250,
//           outDuration: 250,
//           opacity: 0.5,
//           dismissible: true,
//           startingTop: "4%",
//           endingTop: "10%"
//         }
//         M.Modal.init(this.Modal, options)
//       }

//       render() {
//         // console.log(props)
//         let staff = this.props.staff.find(staff => staff.name === this.props.match.params.name)
//         return(
//             <div>
//             <a
//               className="waves-effect waves-light btn modal-trigger"
//               data-target="modal1"
//               href="#!"
//             >
//               Modal
//             </a>
    
//             <div
//               ref={Modal => {
//                 this.Modal = Modal
//               }}
//               id="modal1"
//               className="modal"
//             >
//               {/* If you want Bottom Sheet Modal then add 
//             bottom-sheet class */}
//               <div className="modal-content container">
//                     <h2>{staff.name}</h2>
//                     <StaffImage
//                         name={staff.name}
//                         imageUrl={staff.imageUrl}
//                     />
//                     <h5>{staff.title}</h5>
//                     <div className="divider"></div>
//                     <p>{staff.bio}</p>

//               </div>
//             </div>
//           </div>
//         )
//     }

// }


function Staff(props) {
    let staff = props.staff.find(staff => staff.name === props.match.params.name)
    return(
        <div className="container">
            <h2>{staff.name}</h2>
            <StaffImage
                name={staff.name}
                imageUrl={staff.imageUrl}
            />
            <h5>{staff.title}</h5>
            <div className="divider"></div>
            <p>{staff.bio}</p>
        </div>
    )
}

export default Staff
