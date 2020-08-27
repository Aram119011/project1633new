import React from 'react';
import '.././auth.css';
import axios from 'axios';
import {withRouter} from 'react-router';
import {userSignInAC} from "../../Redux/Selectors/Ayu-Selector";
import {connect} from "react-redux";
import {compose} from "redux";
import {AuthAPI, updateToken} from "../../API/api";
import Cookies from 'js-cookie';


// import { GoogleLogin} from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    };

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            showForgotPass: false,
            inputslogin: [
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
                }


            ],
            errorlogin: '',
        }

    }

    openForgotPass = () => {
        this.setState(state => ({showForgotPass: true}));
        this.setState(state => ({showLogin: false}))
    };

    closeForgotPass = () => {
        this.setState(state => ({showForgotPass: false}));
        this.setState(state => ({showLogin: false}))
    };


    handleChangelogin = (e, id) => {
        this.setState({errorlogin: ''});
        let value = e.currentTarget.value;
        let inputslogin = this.state.inputslogin;
        let input = inputslogin[id];
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

    // --------------------------------------- login
    login = (e) => {
        e.preventDefault();
        let email = this.state.inputslogin[0].value;
        let password = this.state.inputslogin[1].value;
        if (email && password) {
            if (this.state.inputslogin[0].isValid) {
                if (password.length >= 8) {
                    AuthAPI.loginAuth(email, password)
                        .then(res => {
                            console.log(res);
                            if (res.status === 200) {

                                this.props.dispatch(userSignInAC(res.data.user));
                                this.props.history.push('/profile/contacts');

                                updateToken(res.data.token.split(' ')[1]);
                                Cookies.set('token', res.data.token.split(' ')[1]);

                            }
                        })
                        .catch(err => {
                            console.log(err);
                            this.setState({errorlogin: "Invalid user!!!"})

                        });
                    // axios.post('http://localhost:5000/api/auth/login', {email, password})

                    // axios.post('https://rocky-inlet-34170.herokuapp.com/api/auth/login', {email, password})
                    //     .then(res => {
                    //         if (res.status === 200) {
                    //
                    //             this.props.dispatch(userSignInAC(res.data.user.local));
                    //             this.props.history.push('/profile/contacts');
                    //         }
                    //     }).catch(errr => {
                    //     // console.log(errr);
                    //     this.setState({errorlogin: "Invalid user!!!"})
                    //
                    // })


                } else {
                    this.setState({errorlogin: "Can not be more than 8 characters"})
                }
            } else {
                this.setState({errorlogin: "incorrect email!"})
            }
        } else {
            this.setState({errorlogin: "all fields are required"})
        }
    };

    // Google
    GoogleLogin = () => {
        // window.location.href = "https://rocky-inlet-34170.herokuapp.com/api/auth/google"
        this.props.history.push = "https://rocky-inlet-34170.herokuapp.com/api/auth/google"
    };
    // facebook
    FbLogin = () => {
        // window.location.href = "https://rocky-inlet-34170.herokuapp.com/api/auth/facebook"
        this.props.history.push = "https://rocky-inlet-34170.herokuapp.com/api/auth/facebook"
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
                                        onClick={this.props.closeLogin}/></p>
                                <div className="bar-name">
                                    <h2>Login</h2>
                                </div>
                                <form className="form-sbm">
                                    <div className="form-group">
                                        <label className="user_register_email">
                                            <input type="email" className="form-control"
                                                   id="user_register_email"
                                                   placeholder="Email"
                                                   onChange={(e) => this.handleChangelogin(e, 0)}/>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="user_register_pass">
                                            <input type="password" className="form-control"
                                                   id="user_register_pass"
                                                   placeholder="Password"
                                                   onChange={(e) => this.handleChangelogin(e, 1)}/>


                                        </label>
                                        <small onClick={this.props.openForgotPass}>Forgot Your
                                            Password?
                                        </small>
                                    </div>

                                    <input type="submit" className="form-control" id="user_sign_up"
                                           value="Login"
                                           onClick={this.login}/>

                                </form>
                                <div className="another-way">
                                    <span>Or Continue With</span>
                                    <div>

                                        <button className="fb-social-btn" onClick={this.FbLogin}>
                                            <img src={require("../../images/facebook-logo.png")}/>
                                            Facebook
                                        </button>

                                        <button className="google-social-btn" onClick={this.GoogleLogin}>
                                            <img src={require("../../images/google-logo.png")}/>
                                            Google
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='errorBlock'><p> {this.state.errorlogin} </p></div>
                    </div>
                </div>


            </div>


        )
    }

}


const mapStateToProps = state => ({userData: state.auth});

export default compose(
    connect(mapStateToProps),
    withRouter
)(Login);
