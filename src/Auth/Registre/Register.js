import React from 'react';
import '.././auth.css';
import axios from 'axios'
import {AuthAPI} from "../../API/api";

class Registre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [
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
                        required: true,
                        email: true

                    }
                },
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
                },
                {
                    value: "",
                    isTuched: false,
                    isValid: false,
                    validation: {
                        required: true

                    }
                },
            ],
            error: "",
        }

    }

    handleChange = (e, id) => {
        this.setState({error: ''});
        let value = e.currentTarget.value;
        let inputs = this.state.inputs;
        let input = inputs[id];
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


    // ----------------------------------- register
    register = (e) => {
        e.preventDefault();
        let username = this.state.inputs[0].value;
        let email = this.state.inputs[1].value;
        let phone = this.state.inputs[2].value;
        let password = this.state.inputs[3].value;
        let confirm_password = this.state.inputs[4].value;
        if (username && email && phone && password && confirm_password) {
            if (this.state.inputs[1].isValid) {
                if (this.state.inputs[3].value.length >= 8 && this.state.inputs[4].value.length >= 8) {
                    // axios.post('http://localhost:5000/api/auth/register', {
                    // axios.post('https://rocky-inlet-34170.herokuapp.com/api/auth/register', {
                    //     username,
                    //     email,
                    //     phone,
                    //     password,
                    //     confirm_password
                    // })
                    AuthAPI.registerAuth(
                        username,
                        email,
                        phone,
                        password,
                        confirm_password
                    )
                        .then(res => {
                            if (res.status === 201) {
                                {
                                    this.props.openLogin();
                                    this.componentWillUnmount();
                                    this.props.closeRegister()

                                }
                            }


                            this.setState({error: "Loading"})
                        }).catch(error => {
                        {
                            this.setState({error: "Incorrect phone number"})
                        }
                    })
                } else {

                    this.setState({error: "Can not be more than 8 characters"})
                }
            } else {
                this.setState({error: "incorrect email!"})
            }
        } else {
            this.setState({error: "all fields are required"})
        }

    };

    render() {

        return (

            <div id="signin_signup" role="dialog" aria-labelledby="Sign-upModal"
                 aria-hidden="true">

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">


                            <div className="sign-up-bar">
                                <p><img className="close-icon" src={require("../../images/close.png")}
                                        onClick={this.props.closeRegister}/></p>
                                <div className="bar-name">
                                    <h2>Register</h2>
                                </div>
                                <form className="form-sbm">
                                    <div className="form-group">
                                        <label className="user_register_name">
                                            <input type="text" className="form-control"
                                                   id="user_register_name"
                                                   onChange={(e) => this.handleChange(e, 0)}
                                                   placeholder="Name"/>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="user_register_email">
                                            <input type="email" className="form-control"
                                                   id="user_register_email"
                                                   onChange={(e) => this.handleChange(e, 1)}
                                                   placeholder="Email"/>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="user_register_pass">
                                            <input type="text" className="form-control"
                                                   id="user_register_pass"
                                                   onChange={(e) => this.handleChange(e, 2)}
                                                   placeholder="phone"/>


                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="user_register_pass">
                                            <input type="password" className="form-control"
                                                   id="user_register_pass"
                                                   onChange={(e) => this.handleChange(e, 3)}
                                                   placeholder="Password"/>
                                        </label>
                                    </div>
                                    <div className="form-group mb-0">
                                        <label className="user_register_pass_confirm">
                                            <input type="password" className="form-control"
                                                   id="user_register_pass_confirm"
                                                   onChange={(e) => this.handleChange(e, 4)}
                                                   placeholder="Confirm Password"/>
                                        </label>
                                    </div>
                                    <div className="">
                                        <input type="submit" className="form-control"
                                               id="user_sign_up"
                                               value="Register" onClick={this.register}/>
                                    </div>

                                </form>

                            </div>
                        </div>
                        <div className='errorBlock'><p> {this.state.error} </p></div>
                    </div>
                </div>

            </div>
        )
    }

}


export default Registre
