import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'
import '../css/SignUpView.scss'
class SignUpView extends Component {
    componentWillMount(){
        if(this.props.isLogedIn){
            console.log("entered SignUp with user loged in, logout and try again")
            browserHistory.push("/")
        }
    }

    render() {
        return (
            <div className="signUpView-container">
                <div className="signUpForm-container">
                    <SignUpForm 
                        username = {this.props.username}
                        password = {this.props.password}
                        passwordConf = {this.props.passwordConf}
                        changeUserNameField = {this.props.changeUserNameField}
                        changePasswardConfField = {this.props.changePasswardConfField}
                        changePasswardField = {this.props.changePasswardField}
                    />
                </div>
            </div>
        );
    }    
}

SignUpView.propTypes = {
    userSignupRequest: PropTypes.func,
    changeUserNameField: PropTypes.func,
    changePasswardConfField: PropTypes.func,
    changePasswardField: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string,
    passwordConf: PropTypes.string,
}

export default SignUpView
