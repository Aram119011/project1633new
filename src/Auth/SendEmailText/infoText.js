import React from 'react';
import '.././auth.css';
import {Link} from "react-router-dom";

class TextInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (


            <div className="ForgotPassword">
                <div className="reset-email-sent">
                    <div className="modal-content">
                        <button className="close-bar">

                            <img src={require("../../images/close-img.png")}
                                 onClick={this.props.closeTextPass}/>
                        </button>


                        <span onClick={this.props.openShowinfoMsg} className="resetPassBar">
                            <img src={require("../../images/email-sent.png")}/>

                            <h3>Password Reset Email Sent</h3>
                            <span>An email has been sent to your rescue email address, <span className="markEmail">j*****@gmail.com</span>. Folow the
                                directions in the email to reset your password</span>
                            <p>
                                If You did not receive any email from us with 15 minutes, please check your Spam holder.
                                If there is still no email - <Link  to=''>click here to try again.</Link>
                            </p>
                        </span>

                    </div>
                </div>

            </div>

        )
    }

}


export default TextInfo
