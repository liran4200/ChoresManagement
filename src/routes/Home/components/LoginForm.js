import '../css/HomeView.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router'

export const LoginForm = (props) => {
  const isUserExists = (username, password) => {
    console.log("in validaton " + username  + password)
    return props.userList.some((user)=> {
      return (user.usrname == username) && (user.password == password)
    }) 
  }
  const loginFunction = (e) => {
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
    <form name="HomeView">
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" onChange={ (e) => props.updateEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" onChange={(e) => props.updatePassword(e.target.value)}/>
          </div>
        </div>
          <button type="submit" onClick={()=>loginFunction()}/>
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