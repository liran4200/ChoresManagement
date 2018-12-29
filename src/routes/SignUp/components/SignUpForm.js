
import React from 'react'
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'
import { registerUser } from '../../../serverCalls/userAPI'
import { notifySuccess, notifyError } from '../../../components/notify'

export const SignUpForm = (props) => {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(props.passwordConf != props.password){
            notifyError("password and confirmation do not match")
            console.log("cant wrong password conf")
            return
        }
        try {
            let user = await registerUser(props.username, props.password)
            notifySuccess(`User ${props.username} registered succsfully try to login`)
            props.changeUserNameField("")
            props.changePasswardField("")
            props.changePasswardConfField("")
            browserHistory.push('/')
        } catch (error) {
            notifyError(error)
            console.error("error in reg user: " + error)
        }
    }

    return(
        <form onSubmit = { handleSubmit }>
            <h1>SignUp Chore Management!</h1>
            <div className = "form-group">
                <label className = "control-label">
                Username </label>
                <input
                    value = {props.username}
                    onChange = { (event) => props.changeUserNameField(event.target.value)}
                    type = "email"
                    name = "username"
                    className = "form-control"
                />
            </div>
            <div className = "form-group">
                <label className = "control-label">
                password </label>
                <input
                    value = {props.password}
                    onChange = { (event) => props.changePasswardField(event.target.value)}
                    type = "password"
                    name = "password"
                    className = "form-control"
                />
            </div>
            <div className = "form-group">
                <label className = "control-label">
                passwordConfirmation </label>
                <input
                    value = {props.passwordConf}
                    onChange = { (event) => props.changePasswardConfField(event.target.value)}
                    type = "password"
                    name = "passwordConf"
                    className = "form-control"
                />
            </div>
            <input type="submit" value="Sign up"/>
        </form>
        );
}

SignUpForm.propTypes = {
    changeUserNameField: PropTypes.func,
    changePasswardConfField: PropTypes.func,
    changePasswardField: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string,
    passwordConf: PropTypes.string,
}

export default SignUpForm;