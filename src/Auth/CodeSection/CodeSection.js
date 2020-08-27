import React from 'react';
import '.././auth.css';
import axios from 'axios'
import {AuthAPI} from "../../API/api";

class CodeSection extends React.Component {
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
            errorcode: '',
            userid: 'xzczxcxzcz',
            token: '',
        }
    }


    handleChangePass = (e, id) => {
        this.setState({errorcode: ''});
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


    sendCode = (e) => {
        e.preventDefault();
        let token = this.state.inputspass[0].value;

        if (token) {
            AuthAPI.codeselectAuth(
                token
            )
            // axios.post('http://localhost:5000/api/forgot/code', {token})
            // axios.post('https://rocky-inlet-34170.herokuapp.com/api/forgot/code', {token})

                .then(res => {

                    if (res.status === 200) {

                        let myarr = [res.data];
                        this.props.newPassword(myarr);

                    }
                }).catch(errr => {

                if (errr) {
                    this.setState({errorcode: "incorect password"})
                }

            });

        } else {
            this.setState({errorcode: "all fields are required"})
        }

    };

    render() {
        return (

            <div className="ForgotPassword">
                <div className="reset-pass-bar">
                    <div className="modal-content">
                        <button className="close-bar">

                            <img src={require("../../images/close-img.png")}
                                 onClick={this.props.closeCode}/>
                        </button>
                        <div className="content-name-bar">
                            <h4>Code</h4>
                        </div>
                        <div className="white-email-bar">
                            <div>


                                <img src={require("../../images/email-img.png")}/>
                                <p>White code Address</p>


                            </div>
                        </div>
                        <div className="key-img-bar">

                        </div>
                        <div className="forgot-form-bar">
                            <form>
                                <div>
                                    <label className="send-email">Your Code</label>
                                    <input type="string" placeholder="Code"
                                           onChange={(e) => this.handleChangePass(e, 0)}/>

                                </div>
                                <div>
                                    <input type="submit" value="button"
                                           onClick=
                                               // this.sendCode

                                               {this.sendCode}


                                    />
                                </div>
                                <div className='errorBlock'><p> {this.state.errorcode} </p></div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

}


export default CodeSection
