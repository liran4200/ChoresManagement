import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import '../css/HomeView.scss';

export const HomeView = (props) => {
  console.log(`${JSON.stringify(props)}`)
  return ( 
            <LoginForm 
            updateLogin={props.updateLogin}
            email={props.email}
            password={props.password}
            isSuccess={props.isSuccess}
            updateEmail={props.updateEmail}
            updatePassword={props.updatePassword}
            />
     );
}

HomeView.Prototype = {
  email : PropTypes.string,
  password : PropTypes.string,
  isSuccess:PropTypes.bool,
  updateLogin: PropTypes.func,
  updateEmail: PropTypes.func,
  updatePassword: PropTypes.func
}

export default HomeView
