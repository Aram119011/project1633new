import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            inputcontact: [
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
            ],
            errorcontact: "",



        };


        this.ChangeMenu = this.ChangeMenu.bind(this);

    }

    //Validator-login
    ChangeMenu() {
        this.setState(state => ({showMenu: !state.showMenu}));
        this.setState({username:''})

    }
    handleContact = (e, id) => {
        let value = e.currentTarget.value;
        let inputcontact = this.state.inputcontact;
        let input = inputcontact[id];
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




    contact = (e) => {
        e.preventDefault();
        let username = this.state.inputcontact[0].value;
        let email = this.state.inputcontact[1].value;
        let text = this.state.inputcontact[2].value;
        if (username && email && text ) {
            if (this.state.inputcontact[1].isValid) {
                // axios.post('http://localhost:5000/api/support/contact', {
                axios.post('https://rocky-inlet-34170.herokuapp.com/api/support/contact', {
                    username,
                    email,
                    text
                })
                    .then(res => {
                        if (res.status) {
                            {this.props.openTextPass()}
                            this.setState({ errorcontact: 'Loading!!!' })
                        }

                    }).catch(errr => {
                    if(errr===400){
                        this.setState({ errorcontact: 'Incorect data!!!' })
                    }
                })


            }
            else {
                this.setState({ errorcontact: "incorrect email!" })
            }
        } else {
            this.setState({ errorcontact: "all fields are required" })
        }

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
                                        <li className="menu-item"><Link to="howitworks">How It Works</Link></li>
                                        <li className="menu-item"><Link to="/" >Home</Link></li>
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
                            <div className="company-head-banner contact-banner">
                                <div>
                                    <div className="content-name">
                                        <h2>Contact</h2>
                                    </div>
                                    <div className="contact-form">
                                        <form>
                                            <label>Name</label>
                                            <input type="text" placeholder="Name" id="a1"
                                                   onChange={(e) => this.handleContact(e, 0)}

                                            />
                                            <label>E-mail</label>
                                            <input type="email" placeholder="E-mail" id="a2"
                                                   onChange={(e) => this.handleContact(e, 1)}
                                            />
                                            <label> </label>
                                            <textarea name="contactMessage" id="a3" cols="30" rows="10"
                                                      onChange={(e) => this.handleContact(e, 2)}
                                            />

                                            <p>
                                                Email Support: info@comparina.comAddress: Pricena FZ LLC, Fujairah
                                                Creative City Freezone, Creative Tower, Fujairah, United Arab Emirates.
                                            </p>
                                            <div>
                                                <input type="submit" value="submit"
                                                       value="Contact" onClick={this.contact}
                                                />
                                            </div>
                                            <div className='errorBlock'><p> {this.state.errorcontact} </p></div>
                                        </form>
                                    </div>
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


export default Contact;
