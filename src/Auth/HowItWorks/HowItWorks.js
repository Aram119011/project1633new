import React from 'react';
import {Link} from "react-router-dom";


class HowItWorks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,


        };


        this.ChangeMenu = this.ChangeMenu.bind(this);

    }


    //Validator-login
    ChangeMenu() {
        this.setState(state => ({showMenu: !state.showMenu}))
    }


    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="content">
                        <header>
                            <nav className="navbar-expand-lg navbar-light">
                                <Link to="/" className="navbar-brand">
                                    <div className="logo-bar">
                                        <img src={require("../../images/company-logo.png")}/>
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
                                        <li className="menu-item"><Link to="howitworks" className="active">How It Works</Link></li>
                                        <li className="menu-item"><Link to="/">Home</Link></li>
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
                            <div className="company-head-banner howItWork-banner">
                                <div className="content-name">
                                    <h2>How It Works</h2>
                                </div>
                                <div className="howItWork-columns">
                                    <div>
                                        <img src={require("../../images/svg/create-account-icon.svg")}/>
                                        <p>Create Account</p>
                                    </div>
                                    <div>
                                        <img src={require("../../images/svg/create-conference-icon.svg")}/>
                                        <p>Create Conference</p>
                                    </div>
                                    <div>
                                        <img src={require("../../images/svg/join-in-meeting-icon.svg")}/>
                                        <p>Join In Meeting</p>
                                    </div>
                                    <div>
                                        <img src={require("../../images/svg/schedule-meeting-icon.svg")}/>
                                        <p>Schedule Meeting</p>
                                    </div>
                                    <div>
                                        <img src={require("../../images/svg/create-group-chat-icon.svg")}/>
                                        <p>Create Group Chat</p>
                                    </div>
                                    <div>
                                        <img src={require("../../images/svg/start-your-chatting-in-group-icon.svg")}/>
                                        <p>Start Your<br/> Chatting In Group</p>
                                    </div>
                                </div>
                                <div className="howItWork-text-bar">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing alit. Faucibus in sed amet at sit. Sit cras leo, nascetur. Eu neque aliquot in neque, molestee. Vestibulum fames velit hendrerit id elit duis gravida elementum quis. Nisi, aliquam morbi ridiculus leo.
                                    </p>
                                </div>
                            </div>
                            <div className="representative-picture-bar">
                                <img src={require("../../images/company-aside-image.png")}/>

                            </div>
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


export default HowItWorks;
