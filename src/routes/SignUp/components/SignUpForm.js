
import React from 'react'
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'

export const SignUpForm = (props) => {

    const isUserExists = (username) => {
        console.log("in validaton " + username)
        return props.usersList.some((user)=> {
          return user.username == username
        }) 
    }

    const handleSubmit = (e) => {
        console.log(JSON.stringify(props))
        e.preventDefault();
        if(props.passwordConf != props.password){e
            console.log("cant wrong password conf")
            return
        }
        if(isUserExists(props.username)){
            console.log("cant add user exist")
            return
        }
        props.userSignUpRequest({
            "username":  props.username,
            "password": props.password,
            "score":    0
        })
        props.changeUserNameField("")
        props.changePasswardField("")
        props.changePasswardConfField("")
        browserHistory.push('/')
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
    userSignupRequest: PropTypes.func,
    changeUserNameField: PropTypes.func,
    changePasswardConfField: PropTypes.func,
    changePasswardField: PropTypes.func,
    usersList: PropTypes.array,
    username: PropTypes.string,
    password: PropTypes.string,
    passwordConf: PropTypes.string,
}

export default SignUpForm;