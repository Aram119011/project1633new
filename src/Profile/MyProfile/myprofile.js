import React from 'react';
import './myprofile.css';


// images
import imgPhoneCamera from '../../images/svg/photo-camera.svg';
import UserAvatar from '../../images/user-avatar-image-change.png'
import { connect } from "react-redux";
import axios from "axios";
import DateTimePicker from 'react-datetime-picker';

import moment from 'moment';
import timezone from 'moment-timezone';


// import moment from 'react-moment';
// import 'moment-timezone';



import { userSignInAC } from "../../Redux/Selectors/Ayu-Selector";
import { AuthAPI } from "../../API/api";
import AuthDelate from './DelateAcauntAuth/authdelate'

class MyProfile extends React.Component {


    constructor(props) {
        super(props);
        // this.state = {
        //     isModalOpen: false,
        //     closeModalAuth: true
        // };
        //
        // this.state = {
        //     username: '',
        //     email: '',
        //     phone: '',
        //     selectedFile: null
        //     // isModalOpen:false
        // };

    };
    state = {
        username: '',
        email: '',
        phone: '',
        selectedFile: null,
        isModalOpen: false
    };

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModalAuth = () => {
        this.setState({ isModalOpen: false });
    }


    componentDidMount() {
        this.setState({
            username: this.props.userData.username,
            email: this.props.userData.email,
            phone: this.props.userData.phone,
            avatar: UserAvatar,
            imgSrc: null
            // username: this.props.userData.username
        })
    }


    // moment.tz(timestamp, 'America/Los_Angeles').format('YYYY-MM-DD HH:mm ZZ');

    //

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    };

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    handleChangePhone = (e) => {
        this.setState({ phone: e.target.value });
    };

    fileSelectedHandler = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = (e) => {
            this.setState({
                avatar: [reader.result],
                selectedFile: file
            })
        };

        reader.readAsDataURL(file);
    };
    // fileSelectedHandler = event => {
    //         this.setState({
    //             selectedFile: event.target.files[0]
    //         });
    //     };

    fileUploadHandler = () => {
        const img = this.state.selectedFile;

        if (!img) {
            return false;
        }

        AuthAPI.meUploadAuth(img)
            .then()
        // const fd = new FormData();
        // fd.append('image', this.state.selectedFile)
    };

    // onSelectMainPhoto = (event) => {
    //     this.setState({
    //         mainPhoto: event.target.files[0],
    //     });
    // };

    // EditPrfile = (e) => {
    // e.preventDefault();
    // let email = this.props.userData[0].value;
    // // value = {this.props.userData.email}
    //
    //                             e.preventDefault();
    //                             // value = {this.props.userData.username}
    //                             let userName = this.props.userData.username[0].value;
    //                             let email = this.props.userData[1].value;
    //                             let phone = this.props.userData[2].value;

    // if(photo){
    //     AuthAPI.meuploadeAuth(photo)
    //         .then(res=>{
    //             console.log(res, 'res')
    //         })
    //
    // }


    // if (email && userName && phone) {
    //     if (this.state.inputslogin[0].isValid) {
    //         // if () {
    //         // axios.post('http://localhost:5000/api/auth/login', {email, password})
    //         axios.post('', {email, userName, phone})
    //             .then(res => {
    //                 if (res.status === 200) {
    //
    //                     this.props.dispatch(userSignInAC(res.data.user.local));
    //                     this.props.history.push('/profile/contacts');
    //                 }
    //             }).catch(errr => {
    //             // console.log(errr);
    //             this.setState({errorlogin: "Invalid user!!!"})
    //
    //         })
    //
    //
    //     } else {
    //         this.setState({errorlogin: "Can not be more than 8 characters"})
    //     }
    // } else {
    //     this.setState({errorlogin: "incorrect email!"})
    // }
    // } else {
    //     this.setState({errorlogin: "all fields are required"})
    // }

    // let timeZones = moment.tz.names();
    // let offsetTmz=[];
    //
    // for(let i in timeZones)
    // {
    //     offsetTmz.push(" (GMT"+moment.tz(timeZones[i]).format('Z')+")" + timeZones[i]);
    // }
    // };

    // stete local pahman texa
    // this.setState popoxutyan hamara
    changePassword = (type, value) => {
        this.setState({ [type + '_password']: value });
    }

    UserData = (e) => {
        e.preventDefault();

        AuthAPI.changepasswordAuth(this.state)
            .then(data => console.log('Password changed', data))
            .catch(err => console.log(err));
    };

    UserInfo = (e) => {
        e.preventDefault();
        // console.log(this.state);

        // const onj = {
        //     ...this.state,
        //     name: this.state.username
        // }
        AuthAPI.x(this.state).then(res => console.log(res));
    };

    // Delete Your Account


    render() {
        return (
            <div id="profile">

                {/*{*/}
                {/*    this.state.isModalOpen ? <delateAuth/> : null*/}
                {/*}*/}

                {
                    this.state.isModalOpen ? <AuthDelate closeModalAuth={this.closeModalAuth} /> : null
                }

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={() => this.props.closeModal()} type="button" className="close"
                                data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="profile-changes-banner">
                                <div className="content-name">
                                    <h2>Profile</h2>
                                </div>
                                <form className="ng-pristine ng-valid">


                                    <div className="form-group">
                                        <div className="name-img-group">
                                            <div>
                                                <span className="change-image-icon">
                                                    {/*<input type="file" title="Change Picture"*/}

                                                    {/*/>*/}
                                                    <input
                                                        type="file"
                                                        onChange={this.fileSelectedHandler}
                                                        accept="image/*"
                                                    // style={{display: "none"}}
                                                    />

                                                    <span>
                                                        <span>
                                                            {/*<button onClick={this.fileUploadHandler}>Upload</button>*/}

                                                            <img onClick={this.fileUploadHandler} src={imgPhoneCamera} />
                                                            {/*<img src={require("../../images/svg/photo-camera.svg")}/>*/}

                                                        </span>
                                                        <span>
                                                            Change Picture
                                            </span>
                                                    </span>
                                                </span>

                                                <img src={this.state.avatar} />

                                            </div>
                                            {/*<p className="user-name">{this.props.userData.username}</p>*/}
                                            <div>
                                                <label htmlFor="username_change">UserName</label>
                                                <input type="text" className="form-control" id="username_change"
                                                    value={this.state.username}
                                                    onChange={(e) => this.handleChangeUsername(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_email_change">E-mail</label>
                                        <input type="email" className="form-control" id="user_email_change"
                                            value={this.state.email}
                                            onChange={(e) => this.handleChangeEmail(e)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_phone_change">Phone Number</label>
                                        <input type="text" className="form-control" id="user_phone_change"
                                            value={this.state.phone}
                                            onChange={(e) => this.handleChangePhone(e)}
                                        />
                                    </div>
                                    <div className="form-group date-time-group">
                                        <label htmlFor="date_time">Date &amp; Time</label>
                                        <select className="form-control" id="date_time">
                                            <option value="(GMT +2:00) 10:13 PM 03/23/20">(GMT +2:00) 10:13 PM
                                            03/23/20
                                            </option>
                                            {/*<p id="now_date">{moment().format('ll')}</p>*/}
                                            <option value="2">{moment().format('YYYY-MM-DD HH:mm ZZ')}</option>
                                            {/*<option value="2">{moment.tz("America/New_York").format('YYYY-MM-DD HH:mm ZZ')}</option>*/}
                                            <option value="3">{moment.tz(moment.tz.guess()).zoneAbbr()}</option>
                                            {/*{moment.tz(moment.tz()).zoneAbbr()nt.tz()).zoneAbbr()}</option>*/}
                                        </select>
                                        <div className="">
                                            <div className="check-agree-bar">
                                                <input type="checkbox" className="form-check-input"
                                                    id="date_time_automatic" />
                                                <label className="form-check-label"
                                                    htmlFor="date_time_automatic">Automatically</label>
                                                <span className="checkmark"></span>
                                            </div>
                                            <div className="check-agree-bar">
                                                <input type="checkbox" className="form-check-input"
                                                    id="date_time_24hour" />
                                                <label className="form-check-label" htmlFor="date_time_24hour">Use
                                                    24-hour time</label>
                                                <span className="checkmark"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="language">Language</label>
                                            <select className="form-control" id="language">
                                                <option value="English">English</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/*<div>hello</div>*/}
                                    {/*<div className="save-changes-bar">*/}
                                    <input type="submit" onClick={(e) => this.UserInfo(e)} className="save-changes"
                                        id="save-profile-changes" />
                                    {/*//////////////////////////////////////////////////////////////////////////////*/}
                                    <div className="changes-pass-banner">
                                        <div className="form-group">
                                            <label htmlFor="user_register_pass">Change Password</label>
                                            <input type="password" className="form-control" id="user_register_pass"
                                                onChange={(e) => this.changePassword('old', e.target.value)}
                                                placeholder="Old Password" />
                                        </div>
                                        <div className="form-group">

                                            <label htmlFor="user_new_pass_change"></label>
                                            <input type="password" className="form-control" id="user_new_pass_change1"
                                                onChange={(e) => this.changePassword('new', e.target.value)}
                                                placeholder="New Password" />
                                        </div>
                                        <div className="form-group mb-0">

                                            <label htmlFor="user_new_pass_change_confirm"></label>
                                            <input type="password" className="form-control"
                                                onChange={(e) => this.changePassword('confirm', e.target.value)}
                                                id="user_new_pass_change_confirm" placeholder="Confirm Password" />
                                        </div>

                                        <div className="save-changes-bar">
                                            <button type="button" onClick={(e) => this.UserData(e)}>Click Me!</button>
                                            {/*<input type="submit" onClick={ (e) => this.UserData(e)} className="save-changes" id="save-profile-changes"*/}
                                            {/*                // value="Save"*/}
                                            {/*                //    value="Save" onClick={this.EditPrfile}*/}
                                            {/*/>*/}
                                        </div>
                                        {/*<button type="button" onClick={() => this.openModal()}>Delete Your Account*/}
                                        {/*</button>*/}


                                        <button className="deleteAccount" type="button" onClick={() => this.openModal()}>Delete You Account</button>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export default MyProfile;

const mapStateToProps = state => ({ userData: state.auth });

export default connect(mapStateToProps)(MyProfile);
