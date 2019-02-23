import React, { Component } from 'react'

import './Contact.css'

class MailListForm extends Component {
    constructor() {
        super()
        this.state = {
            FIRSTNAME: '',
            LASTNAME: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(this.state.email)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        console.log(this.state.value)
        event.preventDefault()
    }

    render() {

        return (
            <div>
                <div id="sib_embed_signup">
                    <div className="forms-builder-wrapper">
                        <form className="description" id="theform" name="theform" action="https://my.sendinblue.com/users/subscribeembed/js_id/3s8w2/id/2" method="POST">
                            <input type="hidden" name="js_id" id="js_id" value="3s8w2" />
                            <input type="hidden" name="listid" id="listid" value="2" />
                            <input type="hidden" name="from_url" id="from_url" value="yes" />
                            <input type="hidden" name="hdn_email_txt" id="hdn_email_txt" value="" />
                            <input type="hidden" name="sib_simple" value="simple" />
                            <input type="hidden" name="sib_forward_url" value="https://wadestewart.github.io/ccj-react/" id="sib_forward_url" />
                            <div className="sib-container rounded ui-sortable">
                                <input type="hidden" name="req_hid" id="req_hid" value="~LASTNAME~FIRSTNAME" />
                                <div className="header" >
                                    <h4 className="title editable" data-editfield="newsletter_name">Join Our Mailing List</h4>
                                </div>
                                <div className="view-messages"></div> 
                                <div className="primary-group email-group forms-builder-group ui-sortable">
                                    <div>
                                        <div className="lbl-tinyltr">First Name<span> *</span></div>
                                            <input required type="text" name="FIRSTNAME" id="FIRSTNAME" value={this.state.value} onChange={this.handleChange} />
                                            <div className="hidden-btns"><br/></div>
                                        <div>
                                            <div className="lbl-tinyltr">Last Name<span> *</span></div>
                                                <input required type="text" name="LASTNAME" id="LASTNAME" value={this.state.value} onChange={this.handleChange} />
                                                <div className="hidden-btns"><br /></div>
                                        </div>
                                        <div className="mandatory-email">
                                            <div className="lbl-tinyltr">Enter Your Email Address To Subscribe. <span> *</span></div>
                                                <input required type="email" name="email" id="email" value={this.state.value} onChange={this.handleChange} />
                                            <div className="hidden-btns"><br /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="byline">
                                    <button className="waves-effect waves-light btn" type="submit" data-editfield="subscribe">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MailListForm
