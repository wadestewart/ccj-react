import React, { Component } from 'react'

import './Contact.css'

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
        console.log(this.state.email)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        console.log(this.state.value)
        event.preventDefault()
    }

    render() {

        return (
            <div className="col s12 m6">
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
                                    <h1 className="title editable" data-editfield="newsletter_name">
                                        Stay informed.
                                    </h1>
                                </div>
                                <div className="description editable" data-editfield="newsletter_description">
                                   <p>
                                       Subscribe below to receive updates from the Council on Criminal Justice.
                                    </p>
                                </div>
                                <div className="view-messages"></div> 
                                <div className="primary-group email-group forms-builder-group ui-sortable">
                                    <div>
                                        <div className="mandatory-email">
                                            <div className="lbl-tinyltr">Enter Your Email Address To Subscribe. <span> *</span></div>
                                                <input required type="email" name="email" id="email" value={this.state.value} onChange={this.handleChange} />
                                            <div className="hidden-btns"><br /></div>
                                        </div>
                                        <div>
                                            <div className="lbl-tinyltr">First Name<span> *</span></div>
                                                <input required type="text" name="FIRSTNAME" id="FIRSTNAME" value={this.state.value} onChange={this.handleChange} />
                                                <div className="hidden-btns"><br/></div>
                                        </div>
                                        <div>
                                            <div className="lbl-tinyltr">Last Name<span> *</span></div>
                                                <input required type="text" name="LASTNAME" id="LASTNAME" value={this.state.value} onChange={this.handleChange} />
                                                <div className="hidden-btns"><br /></div>
                                        </div>
                                        <div>
                                            <div className="lbl-tinyltr">Organization</div>
                                                <input type="text" name="ORGANIZATION" id="ORGANIZATION" value={this.state.value} onChange={this.handleChange} />
                                                <div className="hidden-btns"><br /></div>
                                        </div>
                                        {/* <div class="captcha forms-builder-group" style="display: none;">
                                            <div>
                                                <div id="gcaptcha" style="transform: scale(1); margin-left: 0px;"></div>
                                            </div>
                                        </div> */}
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

//  <div id="sib_embed_signup">
//     <div class="forms-builder-wrapper">
//         <form class="description" id="theform" name="theform" action="https://my.sendinblue.com/users/subscribeembed/js_id/3s8w2/id/1" method="POST">
//             <input type="hidden" name="js_id" id="js_id" value="3s8w2"/>
//             <input type="hidden" name="listid" id="listid" value="2" />
//             <input type="hidden" name="from_url" id="from_url" value="yes" />
//             <input type="hidden" name="hdn_email_txt" id="hdn_email_txt" value="" />
//             <input type="hidden" name="sib_simple" value="simple" />
//             <input type="hidden" name="sib_forward_url" value="https://wadestewart.github.io/ccj-react/" id="sib_forward_url" />
//             <div class="sib-container rounded ui-sortable">
//                 <input type="hidden" name="req_hid" id="req_hid" value="~LASTNAME~FIRSTNAME" />
//                 <div class="header" style="padding:0 20px;">
//                     <h1 class="title editable" data-editfield="newsletter_name">Stay informed.</h1>
//                 </div>
//                 <div class="description editable" data-editfield="newsletter_description">Subscribe below to receive updates from the Council on Criminal Justice.</div>
//                 <div class="view-messages"></div>
//                 {/* <!-- an email as primary --> */}
//                 <div class="primary-group email-group forms-builder-group ui-sortable">
//                     <div class="row mandatory-email">
//                         <div class="lbl-tinyltr">Email Address&nbsp;<red style="color:#ff0000;">*</red></div>
//                         <input required type="email" name="email" id="email" value="" data-op-id="0" style="padding: 10px 2%; width: 90%; min-width: auto;"> <div style="clear:both;"></div> <div class="hidden-btns"> <br> <!----> </div> </div> <div class="row" style="padding: 10px 20px; font-size: 17px; position: relative; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; color: rgb(52, 52, 52); left: 0px; top: 0px;"><div class="lbl-tinyltr" style="clear:both; float:none;">First Name<red style="color:#ff0000;">*</red> </div> <input required type="text" name="FIRSTNAME" id="FIRSTNAME" value="" data-com.onepassword.iv="" style="padding: 10px 2%; width: 90%; min-width: auto;"> <div class="clear" style="clear:both;"></div> <div class="hidden-btns"> <br>  </div> </div><div class="row" style="padding:10px 20px; font-size:17px; position:relative; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color:#343434;"><div class="lbl-tinyltr" style="clear:both; float:none;">Last Name<red style="color:#ff0000;">*</red> </div> <input required type="text" name="LASTNAME" id="LASTNAME" value="" data-com.onepassword.iv="" style="padding: 10px 2%; width: 90%; min-width: auto;"> <div class="clear" style="clear:both;"></div> <div class="hidden-btns"> <br>  </div> </div>
//                         <div class="row" style="padding:10px 20px; font-size:17px; position:relative; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color:#343434;"><div class="lbl-tinyltr" style="clear:both; float:none;">Organization</div> <input type="text" name="ORGANIZATION" id="ORGANIZATION" value="" style="display:block; float:left; margin-right:3%; min-width:auto; width:90%; padding:10px 2%; border:1px solid #ccc; -moz-border-radius:4px; border-radius:4px; -webkit-border-radius:4px; font-size:13px;"> <div class="clear" style="clear:both;"></div> <div class="hidden-btns"> <br>  </div> </div></div>
                        
//                         <div class="captcha forms-builder-group" style="display: none;">
//                             <div class="row">
//                                 <div id="gcaptcha" style="transform: scale(1); margin-left: 0px;"></div>
//                             </div>
//                         </div>
//                         <!-- end of primary --> <div class="byline" style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; color: rgb(52, 52, 52); font-weight: bold; font-size: 16px; text-align: center; display: block;"> <button class="button editable " type="submit" data-editfield="subscribe" style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; color: rgb(255, 255, 255); background: rgb(5, 5, 5); display: inline-block; white-space: nowrap; min-height: 40px; margin: 0px 5px 0px 0px; padding: 0px 22px; text-decoration: none; text-transform: uppercase; text-align: center; font-weight: bold; font-style: normal; font-size: 14px; cursor: pointer; border: 0px; border-radius: 4px; vertical-align: top; height: auto; line-height: 150%;">Subscribe</button></div> <div style="clear:both;"></div> </div> </form> </div> </div> <!-- End : SendinBlue Signup Form HTML Code --></div>
