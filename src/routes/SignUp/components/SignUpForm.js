
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
      <form role="form" onSubmit = { handleSubmit }>
          <h2 className="text-center">Sign Up</h2>
          <div className="row">
            <div className="form-group">
                <input type="email"
                       name="email"
                       id="email"
                       className="form-control input-lg"
                       placeholder="Email Address"
                       value = {props.username}
                       onChange = { (event) => props.changeUserNameField(event.target.value)}
                       tabIndex="4">
                </input>
            </div>
          </div>
          <div className="row">
            <div className="form-group">
                <input type="password"
                       name="password"
                       id="password"
                       className="form-control input-lg"
                       placeholder="Password"
                       value = {props.password}
                       onChange = { (event) => props.changePasswardField(event.target.value)}
                       tabIndex="5">
                </input>
            </div>
          </div>
          <div className="row">
            <div className="form-group">
                <input type="password"
                       name="password_confirmation"
                       id="password_confirmation"
                       className="form-control input-lg"
                       placeholder="Confirm Password"
                       value = {props.passwordConf}
                       onChange = { (event) => props.changePasswardConfField(event.target.value)}
                       tabIndex="6">
                </input>
            </div>
          </div>
          <div className="row">
            <input type="submit"
                   value="Sign Up!"
                   className="btn btn-primary btn-block btn-lg"
                   tabIndex="7">
            </input>
          </div>
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
