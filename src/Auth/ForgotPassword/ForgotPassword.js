import React from 'react';
import '.././auth.css';
import {AuthAPI} from "../../API/api";

class ForgottenPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputspass: [
                {
                    value: "",
                    isTuched: false,
                    isValid: false,
                    validation: {
                        required: true,
                        email: true

                    }
                },


            ],
            errorforgotpass: '',
        }
    }


    handleChangePass = (e, id) => {
        let value = e.currentTarget.value;
        let inputspass = this.state.inputspass;
        let input = inputspass[id];
        input.value = value;
        input.isTuched = true;
        Object.keys(input.validation).map((elm, index) => {
            if (elm === "required") {
                if (value === "" || value === null) {
                    input.isValid = false;
                } else {
                    input.isValid = true
                }

            } else if (elm === "email") {
                let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(value)) {
                    input.isValid = true;
                } else {
                    input.isValid = false
                }
            }
        })
    };


    // ---------------------------------------- ForgottenPassword
    ForgottenPassword = (e) => {
        e.preventDefault();
        let email = this.state.inputspass[0].value;
        if (email) {
            if (this.state.inputspass[0].isValid) {
                // axios.post('http://localhost:5000/api/forgot/reset', { email })
                // axios.post('https://rocky-inlet-34170.herokuapp.com/api/forgot/reset', { email })
                AuthAPI.forgotAuth(
                    email
                )
                    .then(res => {

                        if (res.status === 200) {
                            this.props.openTextPass();
                            this.props.closeForgotPass();
                        }

                        // this.setState({error: "Loading"});
                    })
                    .catch(err => {
                        this.setState({error: "Incorrect data!!!"})
                    })

            } else {
                this.setState({errorforgotpass: "incorrect email!"})
            }
        } else {
            this.setState({errorforgotpass: "all fields are required"})
        }

    };

    render() {
        return (


            <div className="ForgotPassword">
                {/*<div className="reset-pass-barDiv"></div>*/}
                <div className="reset-pass-bar">
                    <div className="modal-content">
                        <button className="close-bar">

                            <img src={require("../../images/close-img.png")}
                                 onClick={this.props.closeForgotPass}/>
                        </button>
                        <div className="content-name-bar">
                            <h4>Reset Password</h4>
                        </div>
                        <div className="white-email-bar">
                            <div>


                                <img src={require("../../images/email-img.png")}/>
                                <p>White Email Address</p>


                            </div>
                        </div>
                        <div className="key-img-bar">

                            <img src={require("../../images/key-image.png")}/>
                        </div>
                        <div className="forgot-form-bar">
                            <form>
                                <div>
                                    <label className="send-email">Your E-mail</label>
                                    <input type="email" placeholder="E-mail" name="send-email"
                                           id="send-email"
                                           onChange={(e) => this.handleChangePass(e, 0)}
                                           placeholder="Email"/>

                                </div>
                                <div>
                                    <input type="submit" value="Reset Password"
                                           onClick={this.ForgottenPassword}
                                    />
                                </div>
                                <div className='errorBlock'><p> {this.state.errorforgotpass} </p></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}


export default ForgottenPassword
