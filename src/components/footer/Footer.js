import React from 'react'
import Mailto from 'react-protected-mailto' // https://www.npmjs.com/package/react-protected-mailto

import './Footer.css'
import Twitter from './Twitter'

function Footer() {
    return (
        <div className="footer">
            <Twitter />
            <h6 className="footer-title">Council on Criminal Justice</h6>
            <p className="footer-mail">
                <Mailto 
                    email='info@counciloncj.org'
                    headers={
                        {subject:'Question from the website'}
                    }
                />
            </p>
        </div>
    )
}

export default Footer
