import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'
import '../css/HomeView.scss';

export const HomeView = (props) => {
  console.log(`im am props ${JSON.stringify(props)}`)
  return (
    <div className="homeView-container">
      <div className='login-continer'>

        <h5 className="card-title text-center">Sign In</h5>
        <LoginForm
          email={props.email}
          password={props.password}
          userList={props.userList}
          updateEmail={props.updateEmail}
          updatePassword={props.updatePassword}
        />
        <div className="panel-footer">
          <div>Don't have an account ?</div>
          <a href="./signUp">Sign Up!</a>
        </div>
      </div>
    </div>

  );
}

HomeView.Prototype = {
  email: PropTypes.string,
  userList: PropTypes.object,
  password: PropTypes.string,
  updateEmail: PropTypes.func,
  updatePassword: PropTypes.func
}

export default HomeView
