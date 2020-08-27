import React from 'react';
import '.././auth.css';
import axios from 'axios'
import {AuthAPI} from "../../API/api";

class NewPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputnewpass: [
                {
                    value: "",
                    isTuched: false,
                    isValid: false,
                    validation: {
                        required: true

                    }
                },
                {
                    value: "",
                    isTuched: false,
                    isValid: false,
                    validation: {
                        required: true
                    }
                }

            ],
            errornewpass: '',

        }
    }

    handleChangenewpass = (e, id) => {
        // this.setState({errorlogin: ''});
        let value = e.currentTarget.value;
        let inputnewpass = this.state.inputnewpass;
        let input = inputnewpass[id];
        input.value = value;
        input.isTuched = true;
        Object.keys(input.validation).map((elm, index) => {
            if (elm == "required") {
                if (value == "" || value == null) {
                    input.isValid = false;
                } else {
                    input.isValid = true
                }

            } else if (elm == "email") {
                let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(value)) {
                    input.isValid = true;
                } else {
                    input.isValid = false
                }
            }
        })
    };

    Newpass = (e) => {
        e.preventDefault();

        let password = this.state.inputnewpass[0].value;
        let confirm_password = this.state.inputnewpass[1].value;
        let userId = this.props.passwordnewdata.userId;
        let token = this.props.passwordnewdata.token;

        if (password >= 8 && confirm_password >= 8) {
            // axios.post('http://localhost:5000/api/forgot/password', {
           AuthAPI.forgotpasswordAuth(
               password,
               confirm_password,
               userId,
               token
           )
            // axios.post('https://rocky-inlet-34170.herokuapp.com/api/forgot/password', {
            //     password,
            //     confirm_password,
            //     userId,
            //     token,
            //     // passwordnewdata
            // })
                .then(res => {


                    if (res.status === 201) {
                        {
                            this.props.openShowSucsess()
                        }
                    }
                }).catch(errr => {
                if (errr) {
                    this.setState({errornewpass: "incorect password"})
                }

            });


        }

    };


    render() {
        return (
            <div className="resetPassword">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button className="close-bar">
                            <img src={require("../../images/close-img.png")}
                                 onClick={this.props.closeNewPassword}/>
                        </button>
                        <div className="content-name-bar">
                            <h4>Reset Password</h4>
                        </div>
                        <div className="key-img-bar">
                            <img src={require("../../images/key-image.png")}/>

                        </div>
                        <div className="forgot-form-bar">
                            <form>
                                <div>
                                    <label htmlFor="new-pass">New Password</label>
                                    <input type="password" placeholder="New Password" name="send-email"
                                           id="new-pass"
                                           onChange={(e) => this.handleChangenewpass(e, 0)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-pass">Confirm New Password</label>
                                    <input type="password" placeholder="Confirm New Password"
                                           name="send-email" id="confirm-pass"
                                           onChange={(e) => this.handleChangenewpass(e, 1)}
                                    />
                                </div>
                                <div>
                                    <input

                                        type="submit" value="Reset Password"
                                        onClick={this.Newpass}
                                    />
                                </div>
                                <div className='errorBlock'><p> {this.state.errornewpass} </p></div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}


export default NewPassword
