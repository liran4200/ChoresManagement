import '../css/HomeView.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router'

export const LoginForm = (props) => {
  const isUserExists = (username, password) => {
    console.log("in validaton " + username  + password)
    return props.userList.some((user)=> {
      return (user.username == username) && (user.password == password)
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(isUserExists(props.email, props.password)){
      console.log("im in login function user exist")
      browserHistory.push('/chores')
    }else{
      console.log("im in login function, user dosent exist restarting")
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
            <button type="submit" className="btn btn-primary">Submit</button>
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
