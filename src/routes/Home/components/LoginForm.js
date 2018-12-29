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
          <form onSubmit={ handleSubmit }>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={ (e) => props.updateEmail(e.target.value)}>
              </input>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => props.updatePassword(e.target.value)}>
              </input>
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
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
