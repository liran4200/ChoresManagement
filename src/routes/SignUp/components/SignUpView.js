import React from 'react';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types';

export const SignUpView = (props) => {
    return (
        <div className = "row">
            <div className = "col-md-4 col-md-offset-4">
                <SignUpForm 
                    userSignUpRequest = {props.userSignUpRequest}
                    usersList = {props.users_list}
                    username = {props.username}
                    password = {props.password}
                    passwordConf = {props.passwordConf}
                    changeUserNameField = {props.changeUserNameField}
                    changePasswardConfField = {props.changePasswardConfField}
                    changePasswardField = {props.changePasswardField}
                
                />
            </div>
        </div>
    );
}

SignUpView.propTypes = {
    userSignupRequest: PropTypes.func,
    changeUserNameField: PropTypes.func,
    changePasswardConfField: PropTypes.func,
    changePasswardField: PropTypes.func,
    users_list: PropTypes.array,
    username: PropTypes.string,
    password: PropTypes.string,
    passwordConf: PropTypes.string,
}

export default SignUpView
