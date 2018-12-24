import '../css/HomeView.scss';
import PropTypes from 'prop-types';
import React from 'react';
import {browserHistory} from 'react-router'

export const LoginForm = (props) => {
  console.log("login function");
  // callLoginApi(props.email, props.password, error => {
  //   if (!error) {
  //     console.log("login sucess");
  //   } else {
  //     console.log("login error");
  //   }
  // });
 // props.updateLogin(createLogin(props.email,props.password));
    return (
      <form name="HomeView" onSubmit={(e)=>props.updateLogin(e.target.value)}value={(props.email,props.password)} >
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={ (e) => props.updateEmail(e.target.value)} value={props.email}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={(e) => props.updatePassword(e.target.value)} value={props.password}/>
          </div>
        </div>

        <input type="submit"  value="Login"/>

        <div className="message">
          {/* { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { loginError && <div>{loginError.message}</div> } */}
        </div>
      </form>
    );
}

export const createLogin = (email, password) => {
  return {
    "email": email,
    "password": password,
  }
}

function callLoginApi(email, password, callback) {
setTimeout(() => {
  if (email === 'admin@gmail.com' && password === '123') {
      console.log("sucess ");
    return callback(null);
  } else {
      console.log("error");
    return callback(new Error('Invalid email and password'));
  }
}, 1000);
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