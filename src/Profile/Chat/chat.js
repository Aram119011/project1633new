import React from 'react';
// import './profile.css'
import '../profile.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faSms} from '@fortawesome/free-solid-svg-icons'


import {Link} from "react-router-dom";


import moment from 'moment'
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/AuthRedirect";


// images
import imgMenuIcon from '../../images/svg/menu-icon.svg';
import imgExclamatio from '../../images/svg/exclamation.svg';
import imgSentByUser from '../../images/sent-by-user.png';
import imgCreateConference from '../../images/icons/CreateConference-icon.png';
import imgJoinMeeting from '../../images/icons/JoinMeeting-icon.png';
import imgGroupChat from '../../images/icons/GroupChat-icon.png';
import imgScheduleMeeting from '../../images/icons/ScheduleMeeting-icon.png';
import Pricing from "../Pricing/pricing";
import MyProfile from "../MyProfile/myprofile";
import Setings from "../Settings/settings";
import CreatConferance from "../Miting/CreateConference/createconference";
import JoinMeeting from "../Miting/JoinMeeting/joinmeeting";
import GrupChat from "../Miting/JoinMeeting/joinmeeting";
import ScheduleMeeting from "../Miting/ScheduleMeeting/schedulemeeting";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalMenue: false,

            isModalOpen: false,
            dropDown: false,
            isModalSetingsOpen: false,
            isModalPricingOpen: false,

            isModalCreatConferanceOpen: false,
            // isModalNewChatOpen: false,
            isModalJoinMeeting: false,
            isModalGrupChat: false,
            isModalScheduleMeeting: false,

        };
    }


    toggleDropDown = () => {
        this.setState(state => {
            return {
                ...state,
                dropDown: !state.dropDown
            }
        })
    };

    closeDropDown = () => {
        this.setState({dropDown: false});
    };


    openModal() {
        this.setState({isModalOpen: true});
    }

    closeModal = () => {
        this.setState({isModalOpen: false});
    };

    openModalSetings() {
        this.setState({isModalSetingsOpen: true});
    }

    closeModalSetings = () => {
        this.setState({isModalSetingsOpen: false});
    };

    openModalPricing() {
        this.setState({isModalPricingOpen: true});
    }

    closeModalPricing = () => {
        this.setState({isModalPricingOpen: false});
    };


    openModalcreatconferance() {
        this.setState({isModalCreatConferanceOpen: true});
    }


    openModaljoinmeeting() {
        this.setState({isModalJoinMeeting: true});
    }

    openModalgrupchat() {
        this.setState({isModalGrupChat: true});
    }

    openModalschedulemeeting() {
        this.setState({isModalScheduleMeeting: true});
    }

    render() {
        return (
            <div className="bodyProfile">

                {
                    this.state.isModalOpen ? <MyProfile closeModal={this.closeModal}/> : null
                }

                {
                    this.state.isModalSetingsOpen ? <Setings closeModalSetings={this.closeModalSetings}/> : null
                }

                {
                    this.state.isModalPricingOpen ? <Pricing closeModalPricing={this.closeModalPricing}/> : null
                }

                {
                    this.state.isModalCreatConferanceOpen ? <CreatConferance/> : null
                }


                {
                    this.state.isModalJoinMeeting ? <JoinMeeting/> : null
                }

                {
                    this.state.isModalGrupChat ? <GrupChat/> : null
                }
                {
                    this.state.isModalScheduleMeeting ? <ScheduleMeeting/> : null
                }


                {/* <h1>hello</h1> */}
                <div className="wrapper">
                    <div className="profile-controller menu">
                        <div className="time-date-bar">
                            <p className="time-content"><span id="now-time">{moment().format('LT')}</span></p><br/>
                            <p id="now_date">{moment().format('ll')}</p>
                        </div>

                        <div className="showMenuBtn">
                            <img src={imgMenuIcon}/>
                        </div>
                        <div className="menu-bar">
                            <div className="profile-content">
                                <div className="user-avatar-bar">
                                    <FontAwesomeIcon icon={faUser} color='white'/>

                                </div>
                                <div>


                                    <p className="user-name">{this.props.userData.username}</p>
                                    <div className="dropdown">
                                        <button
                                            onClick={this.toggleDropDown}
                                            className="btn btn-secondary dropdown-toggle prof-settings-btn"
                                            type="button"
                                            id="user_menu_avatar"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Profile Settings
                                        </button>

                                        <div
                                            style={this.state.dropDown ? {display: 'block'} : {display: 'none'}}
                                            className="dropdown-menu popover-content"
                                            aria-labelledby="user_menu_avatar">
                                            <div>
                                                <ul>
                                                    <li>
                                                        <button onClick={() => {
                                                            this.closeDropDown();
                                                            this.openModal()
                                                        }} name="profile"
                                                                className="btn p-0"
                                                                data-toggle="modal"
                                                                data-target="#profile">
                                                            Profile
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => this.openModalSetings()} name="settings"
                                                                className="btn p-0"
                                                                data-toggle="modal"
                                                                data-target="#settings">
                                                            Settings
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => this.openModalPricing()} name="pricing"
                                                                className="btn p-0"
                                                                data-toggle="modal"
                                                                data-target="#Pricing">
                                                            pricing
                                                        </button>
                                                    </li>


                                                    {/*{      Log Out}*/}

                                                    {/*<button>*/}
                                                    <li className="mb-0">
                                                        <Link className="dropdown-item" to="">
                                                            Log Out
                                                        </Link>
                                                    </li>
                                                    {/*</button>*/}

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="items-bar">
                                <div className="col menu-item" data-show=".contacts-item">
                                    <div>
                                        <div className="icon-bar">
                                            <Link to="contacts">
                                                <FontAwesomeIcon icon={faUser} color='orange'/>
                                            </Link>
                                        </div>
                                        <div className="icon-name">
                                            <p>Contacts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col menu-item" data-show=".calls-item">

                                    <div>
                                        <div className="icon-bar small-icon-bar">
                                            <Link to="calls">
                                                <FontAwesomeIcon icon={faPhone} color='orange'/>
                                            </Link>
                                        </div>
                                        <div className="icon-name">
                                            <p>Calls</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col menu-item " data-show=".chats-item">
                                    <div>
                                        <div className="icon-bar small-icon-bar">
                                            <Link to="chats">
                                                <FontAwesomeIcon icon={faSms} color='orange'/>
                                            </Link>

                                        </div>
                                        <div className="icon-name">
                                            <p>Chats</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col menu-item" data-show=".notifications-item">
                                    <div>
                                        <div className="icon-bar">
                                            <img src={imgExclamatio}/>


                                            <span className="new-notifications-quantity">5</span>
                                        </div>
                                        <div className="icon-name">
                                            <p>Notifications</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="search"></label>
                                    <input type="search" className="form-control search-control empty" id="search"
                                           placeholder="Search"/>

                                </div>
                                <div className="menu-items-banner">
                                    <div className=" contacts-item menu-item_content">
                                        <div className="sorted-by-letter" id="A-letter-category">
                                            <div className="first-letter-content">
                                                <span className="first-letter">A</span>
                                            </div>

                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={imgSentByUser}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Morris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={imgSentByUser}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Morris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Morris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Morris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sorted-by-letter" id="B-letter-category">
                                            <div className="first-letter-content">
                                                <span className="first-letter">B</span>
                                            </div>

                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Borris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Borris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Borris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Borris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sorted-by-letter" id="C-letter-category">
                                            <div className="first-letter-content">
                                                <span className="first-letter">C</span>
                                            </div>

                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Morris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Morris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">

                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Morris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-item-content">
                                                <div>
                                                    <div className="sent-by-user-img">
                                                        <img src={require("../../images/sent-by-user.png")}/>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="sent-user-name">
                                                        <h3>Morris Bell</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="profile-banner">
                        <div className="profile-body">
                            <div className="head-company-name">
                                <h1><span className="color-style">Comfy</span>Meet</h1>
                                <h2>Online Meeting Platform</h2>
                            </div>

                            <div className="dashboard">
                                <button onClick={() => this.openModalcreatconferance()} type="button"
                                        className="btn-primary" data-toggle="modal"
                                        data-target="#createConferenceModal">
                                            <span className="content-img">
                                                <img src={imgCreateConference}/>

                                            </span>
                                    <span className="content-name">
                                                <span>Create Conference</span>
                                            </span>
                                </button>


                                <button onClick={() => this.openModaljoinmeeting()} type="button"
                                        className=" btn-primary" data-toggle="modal"
                                        data-target="#joinMeetingModal">
                                        <span className="content-img">
                                            <img src={imgJoinMeeting}/>
                                        </span>
                                    <span className="content-name">
                                            <span>Join Meeting</span>
                                        </span>
                                </button>


                                <button onClick={() => this.openModalschedulemeeting()} type="button"
                                        className="btn-primary" data-toggle="modal"
                                        data-target="#scheduleMeetingModal">
                                        <span className="content-img">
                                             <img src={imgScheduleMeeting}/>

                                         </span>
                                    <span className="content-name">
                                         <span>Schedule Meeting</span>
                                        </span>
                                </button>

                                <button onClick={() => this.openModalgrupchat()} type="button" className="btn-primary"
                                        data-toggle="modal"
                                        data-target="#groupChatModal">
                                        <span className="content-img">
                                        <span>
                                            <img src={imgGroupChat}/>
                                        </span>
                                        </span>
                                    <span className="content-name">
                                            <span>New Group Chat</span>
                                        </span>
                                </button>
                            </div>
                            <div className="scheduled-meetings">
                                <button className="scheduled-meet-btn">
                                    <img src={require("../../images/svg/downArrow.svg")}/>
                                </button>
                                <div className="content">
                                    <p className="user-greetings">Hello, <span
                                        className="user-name">{this.props.userData.username}</span>!</p>
                                    <ul>
                                        <li className="meeting-item">
                                            <div>
                                                <p className="color-style">Meeting Name</p>
                                                <p>name-bar</p>
                                            </div>
                                            <div>
                                                <p>March 23, 2020 </p>
                                                <p>10:13 am</p>
                                            </div>
                                            <div>
                                                <p className="color-style">Stats in</p>
                                                <p className="color-style">52 min</p>
                                            </div>
                                            <div className="id-bar">
                                                <p>ID</p>
                                                <p>321465</p>
                                            </div>
                                        </li>
                                        <li className="meeting-item">
                                            <div>
                                                <p className="color-style">Meeting Name</p>
                                                <p>name-bar</p>
                                            </div>
                                            <div>
                                                <p>March 23, 2020 </p>
                                                <p>10:13 am</p>
                                            </div>
                                            <div>
                                                <p className="color-style">Stats in</p>
                                                <p className="color-style">52 min</p>
                                            </div>
                                            <div className="id-bar">
                                                <p>ID</p>
                                                <p>321465</p>
                                            </div>
                                        </li>
                                        <li className="meeting-item">
                                            <div>
                                                <p className="color-style">Meeting Name</p>
                                                <p>name-bar</p>
                                            </div>
                                            <div>
                                                <p>March 23, 2020 </p>
                                                <p>10:13 am</p>
                                            </div>
                                            <div>
                                                <p className="color-style">Stats in</p>
                                                <p className="color-style">52 min</p>
                                            </div>
                                            <div className="id-bar">
                                                <p>ID</p>
                                                <p>321465</p>
                                            </div>
                                        </li>
                                        <li className="meeting-item">
                                            <div>
                                                <p className="color-style">Meeting Name</p>
                                                <p>name-bar</p>
                                            </div>
                                            <div>
                                                <p>March 23, 2020 </p>
                                                <p>10:13 am</p>
                                            </div>
                                            <div>
                                                <p className="color-style">Stats in</p>
                                                <p className="color-style">52 min</p>
                                            </div>
                                            <div className="id-bar">
                                                <p>ID</p>
                                                <p>321465</p>
                                            </div>
                                        </li>

                                        <li className="meeting-item">
                                            <div>
                                                <p className="color-style">Meeting Name</p>
                                                <p>name-bar</p>
                                            </div>
                                            <div>
                                                <p>March 23, 2020 </p>
                                                <p>10:13 am</p>
                                            </div>
                                            <div>
                                                <p className="color-style">Stats in</p>
                                                <p className="color-style">52 min</p>
                                            </div>
                                            <div className="id-bar">
                                                <p>ID</p>
                                                <p>321465</p>
                                            </div>
                                        </li>
                                        <li className="meeting-item">
                                            <div>
                                                <p className="color-style">Meeting Name</p>
                                                <p>name-bar</p>
                                            </div>
                                            <div>
                                                <p>March 23, 2020 </p>
                                                <p>10:13 am</p>
                                            </div>
                                            <div>
                                                <p className="color-style">Stats in</p>
                                                <p className="color-style">52 min</p>
                                            </div>
                                            <div className="id-bar">
                                                <p>ID</p>
                                                <p>321465</p>
                                            </div>
                                        </li>
                                        <li className="meeting-item">
                                            <div>
                                                <p className="color-style">Meeting Name</p>
                                                <p>name-bar</p>
                                            </div>
                                            <div>
                                                <p>March 23, 2020 </p>
                                                <p>10:13 am</p>
                                            </div>
                                            <div>
                                                <p className="color-style">Stats in</p>
                                                <p className="color-style">52 min</p>
                                            </div>
                                            <div className="id-bar">
                                                <p>ID</p>
                                                <p>321465</p>
                                            </div>
                                        </li>
                                        <li className="meeting-item">
                                            <div>
                                                <p className="color-style">Meeting Name</p>
                                                <p>name-bar</p>
                                            </div>
                                            <div>
                                                <p>March 23, 2020 </p>
                                                <p>10:13 am</p>
                                            </div>
                                            <div>
                                                <p className="color-style">Stats in</p>
                                                <p className="color-style">52 min</p>
                                            </div>
                                            <div className="id-bar">
                                                <p>ID</p>
                                                <p>321465</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


// export default Chat;

const mapStateToProps = state => ({userData: state.auth});

export default compose(
    connect(mapStateToProps),
    WithAuthRedirect
)(Chat);
