import React from 'react';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types';
import '../css/SignUpView.scss';

export const SignUpView = (props) => {
    return (
        <div className="signUpView-container">
          <div className="signUpForm-container">
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
