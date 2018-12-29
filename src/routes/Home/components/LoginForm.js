import '../css/HomeView.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { loginFunc } from '../../../serverCalls/userAPI'
import { notifySuccess, notifyError } from '../../../components/notify'

export const LoginForm = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginFunc(props.email, props.password)
      console.log("im in login function user exist")
      notifySuccess(`Logged in successfully`)
      props.updateIsLogin(true)
    } catch (error) {
      notifyError(error)
      props.updateEmail("")
      props.updatePassword("")  
    }
  }
  
  return (
    <form name="HomeView" onSubmit={ handleSubmit }>
        <div className="form-group-collection">
          <div className="form-labels">
            <label>Email:</label>
            <label>Password:</label>
          </div>
          <div className="form-input">
            <input type="email" onChange={ (e) => props.updateEmail(e.target.value)}/>
            <input type="password" onChange={(e) => props.updatePassword(e.target.value)}/>
          </div>
        </div>
          <input type="submit" value="Login"/>
        <div className="message">
        </div>
      </form>
    );
}

LoginForm.PropTypes = {
  email : PropTypes.string,
  password : PropTypes.string,
  isSuccess:PropTypes.bool,
  updateLogin: PropTypes.func,
  updateEmail: PropTypes.func,
  updatePassword: PropTypes.func
}

export default LoginForm