import React, { Component } from 'react'

import './MailList.css'

class MailListForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            FIRSTNAME: '',
            LASTNAME: '',
            ORGANIZATION: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        // console.log(this.state.email)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        // console.log(this.state.value)
        event.preventDefault()
    }

    render() {

        return (
            <div id="mail-list-form" className="col s12 m6">
                <div id="sib_embed_signup">
                    <div className="forms-builder-wrapper">
                        <div className="row">
                            <form className="description col s12 m8 push-m2" id="theform" name="theform" action="https://my.sendinblue.com/users/subscribeembed/js_id/3s8w2/id/2" method="POST">
                                <input type="hidden" name="js_id" id="js_id" value="3s8w2" />
                                <input type="hidden" name="listid" id="listid" value="2" />
                                <input type="hidden" name="from_url" id="from_url" value="yes" />
                                <input type="hidden" name="hdn_email_txt" id="hdn_email_txt" value="" />
                                <input type="hidden" name="sib_simple" value="simple" />
                                <input type="hidden" name="sib_forward_url" value="https://wadestewart.github.io/ccj-react/" id="sib_forward_url" />
                                <div className="sib-container rounded ui-sortable">
                                    <input type="hidden" name="req_hid" id="req_hid" value="~LASTNAME~FIRSTNAME" />
                                    <div className="header" >
                                        <h5 className="title editable" data-editfield="newsletter_name">
                                            Stay informed
                                        </h5>
                                    </div>
                                    <div className="row" data-editfield="newsletter_description">
                                    <p id="mail-form-p" className="col s12 m8">
                                        Subscribe below to receive updates from the Council on Criminal Justice.
                                        </p>
                                    </div>
                                    <div className="view-messages"></div> 
                                    <div className="primary-group email-group forms-builder-group ui-sortable">
                                        <div>
                                            <div className="mandatory-email">
                                                <input required type="email" name="email" id="email" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
                                                <div className="hidden-btns"><br /></div>
                                            </div>
                                            <div>
                                                <input required type="text" name="FIRSTNAME" id="FIRSTNAME" placeholder="First name" value={this.state.value} onChange={this.handleChange} />
                                                <div className="hidden-btns"><br/></div>
                                            </div>
                                            <div>
                                                <input required type="text" name="LASTNAME" id="LASTNAME" placeholder="Last name" value={this.state.value} onChange={this.handleChange} />
                                                <div className="hidden-btns"><br /></div>
                                            </div>
                                            <div>
                                                <input type="text" name="ORGANIZATION" id="ORGANIZATION" placeholder="Organization" value={this.state.value} onChange={this.handleChange} />
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
            </div>
        )
    }
}

export default MailListForm
