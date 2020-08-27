import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import React from 'react';


export const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.PureComponent {

        render() {
            const { isAuth } = this.props;
            if (!isAuth) {
                return <Redirect to='/' />
            }
            return (
                <Component {...this.props} />
            )
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};


const mapStateToPropsForRedirect = state => ({ isAuth: state.auth.username});
