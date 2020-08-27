import React from 'react';
import './auth.css';

import {Link} from "react-router-dom";
import Login from './Login/Login';
import Registre from './Registre/Register'
import ForgottenPassword from './ForgotPassword/ForgotPassword'
import TextInfo from './SendEmailText/infoText'
import CodeSection from './CodeSection/CodeSection'
import NewPassword from './NewPassword/NewPassword'
import SuccessSection from './SuccessSection/SuccessSection'


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            showLogin: false,
            showRegister: false,
            showtextpassword: false,
            showForgotPass: false,
            showinfoMsg: false,

            Newpass: false,
            showsucsses: false,
            showCode: false,
            userid: '',
            errorpass: '',
        };
    }


    //Validator-login
    ChangeMenu = () => {
        this.setState(state => ({showMenu: !state.showMenu}))
    };

    openRegister = () => {
        this.setState(state => ({showRegister: true}))
    };
    closeRegister = () => {
        this.setState(state => ({showRegister: false}))
    };

    componentWillUnmount() {
        this.setState(state => ({showRegister: false}))
    }

    openLogin = () => {
        this.setState(state => ({showLogin: true}))

    };

    closeLogin = () => {
        this.setState(state => ({showLogin: false}))
    };

    openForgotPass = () => {
        this.setState(state => ({showForgotPass: true}));
        this.setState(state => ({showLogin: false}));

    };

    closeForgotPass = () => {
        this.setState(state => ({showForgotPass: false}))
    };

    openTextPass = () => {
        this.setState(state => ({showtextpassword: true}));
    };

    closeTextPass = () => {
        this.setState(state => ({showtextpassword: false}))
    };

    openShowinfoMsg = () => {
        this.setState(state => ({showinfoMsg: true}));
        this.setState(state => ({showtextpassword: false}))
    };
    closeCode = () => {
        this.setState(state => ({showinfoMsg: false}))
    };


    newPassword = (value) => {
        this.setState(state => ({Newpass: true}));
        this.setState(state => ({showinfoMsg: false}))
        this.setState({userid: value[0]})
        this.setState({token: value[2]})
        // console.log(this.state.userid,"state")

    };

    closeNewPassword = () => {
        this.setState(state => ({Newpass: false}))
    };

    openShowSucsess = () => {
        this.setState(state => ({showsucsses: true}));
        this.setState(state => ({Newpass: false}))
    };

    openLoginAfterSuccess = () => {
        this.setState(state => ({showLogin: true}));
        this.setState(state => ({showsucsses: false}));
    };


    render() {

        return (
            <div>
                <div className="wrapper">
                    <div className="content">
                        <header>
                            <nav className="navbar-expand-lg navbar-light">
                                <Link to="/" className="navbar-brand">
                                    <div className="logo-bar">
                                        <img src={require("../images/company-logo.png")}/>
                                    </div>
                                </Link>
                                <button onClick={this.ChangeMenu} className="navbar-toggler" type="button"
                                        data-toggle="collapse" data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown"
                                     style={{display: this.state.showMenu ? 'block' : 'none'}}>
                                    <ul className="company-menu">
                                        <li className="menu-item"><Link to="Contact">Contact</Link></li>
                                        <li className="menu-item"><Link to="AboutUs">About Us</Link></li>
                                        <li className="menu-item"><Link to="howitworks">How It Works</Link></li>
                                        <li className="menu-item"><Link to="/" className="active">Home</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <footer>
                            <div className="foot-body">
                                <p>2020C Lorem ipsum dolor sit</p>
                            </div>
                        </footer>
                    </div>
                    <div className="content">
                        <section>
                            <div className='infoMsg' style={{display: this.state.showinfoMsg ? 'block' : 'none'}}>
                            </div>

                            <div className="company-head-banner">
                                <div className="company-name">
                                    <h1>Company Name</h1>
                                </div>
                                <div className="company-description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in sed amet at
                                        sit. Sit cras
                                        leo, ut nascetur. Eu neque aliquet in neque, molestie. Vestibulum fames velit
                                        hendrerit id elit
                                        duis gravida elementum quis. Nisi, aliquam morbi ridiculus leo.
                                    </p>
                                </div>
                                <div className="login-register-bar">

                                    <button onClick={this.openLogin} value="Login" name="login_signup"
                                            className="btn" data-toggle="modal"
                                            data-target="#signin_signup" style={{
                                        "backgroundColor": "#EF7921",
                                        "color": "white",
                                        "marginTop": "10px"
                                    }}>
                                        Login

                                    </button>
                                    &nbsp;&nbsp;
                                    <button onClick={this.openRegister} value="Signup" name="login_signup"
                                            className="btn" data-toggle="modal"
                                            data-target="#signin_signup" style={{"marginTop": "10px"}}>Register
                                    </button>
                                </div>


                            </div>

                            <div className="representative-picture-bar">
                                <img src={require("../images/company-aside-image.png")}/>

                            </div>

                            {/* -----------------------------Register----------------- */}

                            {
                                this.state.showRegister &&
                                <Registre closeRegister={this.closeRegister} openLogin={this.openLogin}/>
                            }


                            {
                                this.state.showLogin &&
                                <Login closeLogin={this.closeLogin} openForgotPass={this.openForgotPass}/>
                            }


                            {/* -------------------ForgotPassword---------------------- */}
                            {

                                this.state.showForgotPass &&
                                <ForgottenPassword openTextPass={this.openTextPass}
                                                   closeForgotPass={this.closeForgotPass}/>
                            }


                            {

                                this.state.showtextpassword &&
                                <TextInfo
                                    closeTextPass={this.closeTextPass}
                                    openShowinfoMsg={this.openShowinfoMsg}/>

                            }

                            {

                                this.state.showinfoMsg &&
                                <CodeSection closeCode={this.closeCode} newPassword={this.newPassword}/>

                            }


                            {/* ---------------------Reset_Password-------------------- */}
                            {
                                this.state.Newpass && <NewPassword closeNewPassword={this.closeNewPassword}
                                                                   openShowSucsess={this.openShowSucsess}
                                                                   passwordnewdata={this.state.userid}
                                />
                            }


                            {/*-------------------sucsess-------------*/}

                            {
                                this.state.showsucsses &&
                                <SuccessSection openShowSucsess={this.openShowSucsess}
                                                openLoginAfterSuccess={this.openLoginAfterSuccess}/>
                            }


                            <div className="media-footer">
                                <p>2020C Lorem ipsum dolor sit</p>
                            </div>

                        </section>

                    </div>
                </div>

            </div>

        )
    }
}


export default SignUp;
