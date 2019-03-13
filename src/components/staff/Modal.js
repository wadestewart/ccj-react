import React, { Component } from "react"
import M from "materialize-css"

import "materialize-css/dist/css/materialize.min.css"

class Modal extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
      const options = {
        onOpenStart: () => {
          console.log("Open Start")
          console.log(this.props)
        //   instance.open()
        },
        onOpenEnd: () => {
          console.log("Open End")
        },
        onCloseStart: () => {
          console.log("Close Start")
        //   instance.close()
        },
        onCloseEnd: () => {
          console.log("Close End")
        //   instance.destroy()
        },
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: true,
        startingTop: "4%",
        endingTop: "10%"
      };
      M.Modal.init(this.Modal, options)
  
    //   let instance = M.Modal.getInstance(this.Modal)
    //   instance.open()
    //   instance.close()
    //   instance.destroy()
    }
  
    render() {
      return (
        <div>
          <a
            className="waves-effect waves-light btn modal-trigger"
            data-target="modal1"
            href="#!"
          >
            Modal
          </a>
  
          <div
            ref={Modal => {
              this.Modal = Modal
            }}
            id="modal1"
            className="modal"
          >
            {/* If you want Bottom Sheet Modal then add 
          bottom-sheet class */}
            <div className="modal-content">
              <h4>{this.props.name}</h4>
              <p>{this.props.title}</p>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Modal
