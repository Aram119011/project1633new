import axios from 'axios';
import Cookies from 'js-cookie';



const devURL = 'http://localhost:5000/api';
const prodURL = 'https://rocky-inlet-34170.herokuapp.com/api/';


let params = {
    baseURL: devURL,
    headers: {
        'Authorization': 'bearer ' + (Cookies.get('token') || sessionStorage.getItem('token')),
        'Content-Type': 'application/json, multipart/form-data',
    }
};

let instance = axios.create({...params});

export const AuthAPI = {
    async registerAuth(
        username,
        email,
        phone,
        password,
        confirm_password
    ) {
        return await axios.post('http://localhost:5000/api/auth/register', {
            username,
            email,
            phone,
            password,
            confirm_password
        });
        // return await instance.post('auth/register', {username, email, phone, password, confirm_password});
    },

    async loginAuth(email, password) {
        return await axios.post(devURL + '/auth/login', {email, password});
        // return await instance.post('auth/login', {email, password});
    },


    async meAuth() {
        return await instance.get('auth/me');
    },

    async forgotAuth(email) {
        return await axios.post('http://localhost:5000/api/forgot/reset', {email});
        // return await instance.post('auth/login', {email, password});
    },

    async codeselectAuth(token) {
        return await axios.post('http://localhost:5000/api/forgot/code', {token});
        // return await instance.post('auth/login', {email, password});
    },

    async forgotpasswordAuth(
        password,
        confirm_password,
        userId,
        token) {
        return await axios.post('http://localhost:5000/api/forgot/password', {
            password,
            confirm_password,
            userId,
            token
        });
        // return await instance.post('auth/login', {email, password});
    },

    async meUploadAuth(img) {
        const fd = new FormData();
        fd.append('image', img);
        await axios.post(devURL + '/profile/photo', fd);
        return await axios.post(devURL + '/profile/remove_photo');
        // return await instance.post('auth/login', {email, password});
    },

    async x(data) {
        console.log(data);
        const user = {
            name: data.name,
            email: data.email,
            phone: data.phone
        };

        return await axios.post(devURL + '/password/edit', user);
    },

    // async getUserImage(userId) {
    //     return await axios.get(devURL + '/img', userId);
    // },

    async changepasswordAuth(data) {
        const password = {
            new_password: data.new_password,
            confirm_password: data.confirm_password,
            old_password: data.old_password
        };

        console.log(password)

        return await axios.post(devURL + '/profile/change_password', password);
    },


    async accoundelatetAuth(token) {
        return await axios.get(devURL + '/auth/unlink', token);
        // return await instance.post('auth/login', {email, password});
    },

    async logOutAuth(token) {
        return await axios.get(devURL + 'auth/logout', token);
    },

};

// // // // // UPDATE PARAMS // // // // //

export function updateToken({value}) {
    instance = axios.create({
        ...params,
        headers: {
            ...params.headers,
            'Authorization': 'bearer ' + value
        }
    });
}
