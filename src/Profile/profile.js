import React from 'react';
import './profile.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faSms} from '@fortawesome/free-solid-svg-icons'


import {Link} from "react-router-dom";


import moment from 'moment'
import axios from "axios";



class Profile extends React.Component {


    render() {

        // axios.get('http://localhost:5000/api/auth/profile')
        axios.get('https://rocky-inlet-34170.herokuapp.com/api/auth/profile')
            .then(res => {

            }).catch(errr => {

            console.log(errr, 'err')
        });
        return (
            <div className="bodyProfile">
                {/* <h1>hello</h1> */}
                <div className="wrapper">
                    <div className="profile-controller menu">
                        <div className="time-date-bar">
                            <p className="time-content"><span id="now-time">{moment().format('LT')}</span></p><br/>
                            <p id="now_date">{moment().format('ll')}</p>
                        </div>
                        <div className="showMenuBtn">
                            <img src={require("../images/svg/menu-icon.svg")}/>
                        </div>
                        <div className="menu-bar">
                            <div className="profile-content">
                                <div className="user-avatar-bar">
                                    {/*<i className="fa fa-user" aria-hidden="true"></i>*/}
                                    <FontAwesomeIcon icon={faUser} color='white'/>

                                </div>
                                <div>
                                    <select name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    {/*<DropdownButton id="dropdown-basic-button" title="Dropdown button">*/}
                                    {/*    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
                                    {/*    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                                    {/*    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                                    {/*</DropdownButton>*/}
                                    <p className="user-name">Mostafa Monier</p>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle prof-settings-btn"
                                                type="button"
                                                id="user_menu_avatar"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Profile Settings
                                        </button>
                                        <div className="dropdown-menu popover-content"
                                             aria-labelledby="user_menu_avatar">
                                            <div>
                                                <ul>
                                                    <li>
                                                        <Link className="dropdown-item" to="">
                                                            <button name="profile" className="btn p-0"
                                                                    data-toggle="modal"
                                                                    data-target="#profile">
                                                                Profile
                                                            </button>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="">
                                                            <button name="settings" className="btn p-0"
                                                                    data-toggle="modal"
                                                                    data-target="#settings">
                                                                Settings
                                                            </button>
                                                        </Link>
                                                    </li>
                                                    <li className="mb-0">
                                                        <Link className="dropdown-item" to="">
                                                            Log Out
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="items-bar">
                                <div className="col menu-item" data-show=".contacts-item">
                                    <div>
                                        <div className="icon-bar ">
                                            <FontAwesomeIcon icon={faUser} color='orange'/>
                                        </div>
                                        <div className="icon-name">
                                            <p>Contacts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col menu-item" data-show=".calls-item">
                                    <div>
                                        <div className="icon-bar small-icon-bar">
                                            {/*<i className="fa fa-phone" aria-hidden="true"></i>*/}
                                            <FontAwesomeIcon icon={faPhone} color='orange'/>

                                        </div>
                                        <div className="icon-name">
                                            <p>Calls</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col menu-item " data-show=".chats-item">
                                    <div>
                                        <div className="icon-bar small-icon-bar">
                                            {/*<i className="fa fa-commenting" aria-hidden="true"></i>*/}
                                            <FontAwesomeIcon icon={faSms} color='orange'/>
                                        </div>
                                        <div className="icon-name">
                                            <p>Chats</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col menu-item" data-show=".notifications-item">
                                    <div>
                                        <div className="icon-bar">
                                            {/*<img src="images/svg/exclamation.svg" alt="" title="">*/}
                                            <img src={require("../images/svg/exclamation.svg")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>
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
                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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

                                                        <img src={require("../images/sent-by-user.png")}/>

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
                                                        <img src={require("../images/sent-by-user.png")}/>

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

                    {/*kkkk*/}
                    <div className="profile-banner">
                        <div className="profile-body">
                            <div className="head-company-name">
                                <h1><span className="color-style">Comfy</span>Meet</h1>
                                <h2>Online Meeting Platform</h2>
                            </div>
                            <div className="dashboard">
                                <button type="button" className="btn-primary" data-toggle="modal"
                                        data-target="#createConferenceModal">
                    <span className="content-img">
                        <img src={require("../images/icons/CreateConference-icon.png")}/>

                    </span>
                                    <span className="content-name">
                        <span>Create Conference</span>
                    </span>
                                </button>
                                <button type="button" className="btn-primary" data-toggle="modal"
                                        data-target="#chooseContactModal">
                    <span className="content-img">
                        <img src={require("../images/icons/NewChat-icon.png")}/>
                    </span>
                                    <span className="content-name">
                        <span>New Chat</span>
                    </span>
                                </button>

                                <button type="button" className=" btn-primary" data-toggle="modal"
                                        data-target="#joinMeetingModal">
                                        <span className="content-img">
                                            <img src={require("../images/icons/JoinMeeting-icon.png")}/>
                                        </span>
                                        <span className="content-name">
                                            <span>Join Meeting</span>
                                        </span>
                                </button>
                                <button type="button" className="btn-primary" data-toggle="modal"
                                        data-target="#groupChatModal">
                                        <span className="content-img">
                                        <span>
                                            <img src={require("../images/icons/GroupChat-icon.png")}/>
                                        </span>
                                        </span>
                                        <span className="content-name">
                                            <span>Group Chat</span>
                                        </span>
                                </button>

                                <button type="button" className="btn-primary" data-toggle="modal"
                                        data-target="#scheduleMeetingModal">
                                        <span className="content-img">
                                             <img src={require("../images/icons/ScheduleMeeting-icon.png")}/>

                                         </span>
                                        <span className="content-name">
                                         <span>Schedule Meeting</span>
                                        </span>
                                </button>
                                <button>
                                <span className="content-img">
                                 <span>
                                    <img src={require("../images/icons/CreateWebinar-icon.png")}/>

                                 </span>
                                 </span>
                                    <span className="content-name">
                                 <span>Create Webinar</span>
                                    </span>
                                </button>
                            </div>
                            <div className="scheduled-meetings">
                                <button className="scheduled-meet-btn">
                                    <img src={require("../images/svg/downArrow.svg")}/>
                                </button>
                                <div className="content">
                                    <p className="user-greetings">Hello, <span className="user-name">mostafa</span>!</p>
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


export default Profile;
