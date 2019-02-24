import React from 'react'

import MailListForm from './MailListForm'
import './Contact.css'

function Contact() {
    return(
        <div className="row">
            <MailListForm />
            <div id="contact" className="center col s12 m6">
                <h4>Adam Gelb</h4>
                <h5>President & CEO</h5>
                <p>dummy@email.com</p>
                <h4>Abby Walsh</h4>
                <h5>Director</h5>
                <p>dummy@email.com</p>
            </div>
        </div>
    )
}

export default Contact