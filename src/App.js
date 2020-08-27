import React, {Component} from 'react';
import {BrowserRouter, Route, Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css';
import Auth from './Auth/auth';
import AboutUs from './Auth/AboutUs/AboutUs';
import Contact from './Auth/Contact/Contact';
import HowItWorks from './Auth/HowItWorks/HowItWorks';
// import Profile from './Profile/profile';
import Contacts from './Profile/Contacts/contacts';
import Calls from "./Profile/Calls/calls";
import Chats from "./Profile/Chat/chat";

import {connect, Provider} from "react-redux";
import store from './Redux/Store'
import axios from "axios";
import {AuthAPI} from "./API/api";
import {userSignInAC} from "./Redux/Selectors/Ayu-Selector";
import Cookies from "js-cookie";

class App extends Component {
    render() {
        const token = Cookies.get('token') || sessionStorage.getItem('token');

        if (token) {
            axios.defaults.headers.post['Authorization'] = 'Bearer ' + token;
            axios.defaults.headers.get['Authorization'] = 'Bearer ' + token;
            AuthAPI.meAuth()
                .then(res => {
                    this.props.dispatch(userSignInAC(res.data.user))
                });
        }

        return (
            <React.Fragment>
                <Route exact path='/' component={Auth}/>
                <Route exact path='/aboutus' component={AboutUs}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/howitworks' component={HowItWorks}/>
                {/*<Route exact path='/forgottenpassword' component={ForgottenPassword}/>*/}
                {/*<Route exact path='/profile' component={Profile}/>*/}

                {/*Profile*/}
                <Route exact path='/profile/contacts' component={Contacts}/>
                <Route exact path='/profile/calls' component={Calls}/>
                <Route exact path='/profile/chats' component={Chats}/>
            </React.Fragment>
        );
    }
}

const AppContainer = connect()(App);

function Dev() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Route path='/' component={AppContainer}/>
            </Provider>
        </BrowserRouter>
    );
}


export default Dev;
