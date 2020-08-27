const USER_SIGN_IN = 'auth-Reducer/USER_SIGN_IN';

const initial = {
    userInfo: {
        email: null,
        username: null,
        phone: null,
    },
};

export const AuthReducer = (state = initial, action) => {
    switch (action.type) {
        case USER_SIGN_IN:
            return {
                email: action.userData.email,
                username: action.userData.username,
                phone: action.userData.phone,
            };
        default:
            return state;
    }
};

// // // // // ACTION CREATORS // // // // //

export const userSignInAC = (userData) => ({ type: USER_SIGN_IN, userData });


