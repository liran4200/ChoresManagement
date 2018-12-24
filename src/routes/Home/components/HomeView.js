import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import '../css/HomeView.scss';

export const HomeView = (props) => {
  console.log(`im am props ${JSON.stringify(props)}`)
  return ( 
            <LoginForm 
            email={props.email}
            password={props.password}
            userList={props.userList}
            updateEmail={props.updateEmail}
            updatePassword={props.updatePassword}
            />
     );
}

HomeView.Prototype = {
  email : PropTypes.string,
  userList : PropTypes.object,
  password : PropTypes.string,
  updateEmail: PropTypes.func,
  updatePassword: PropTypes.func
}

export default HomeView
