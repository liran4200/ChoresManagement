import React, { Component } from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'
import '../css/HomeView.scss';

class HomeView extends Component {
  componentWillMount(){
      if(this.props.isLogedIn){
        console.log(`logining out user : ${this.props.email}`)
        this.props.updateIsLogin(false)
        this.props.updateEmail("")
        this.props.updatePassword("")
      }
  }
  
  render() {
    console.log(`im HomeView in props ${JSON.stringify(this.props)}`)
    return (
      <div>
        <div className='login-space' />
        <div className='login-continer'>
          <LoginForm
            email={this.props.email}
            password={this.props.password}
            updateEmail={this.props.updateEmail}
            updatePassword={this.props.updatePassword}
            updateIsLogin={this.props.updateIsLogin}
          />
          <div>
            <div>Don't have an account ?</div>
            <a href="./signUp">Sign Up!</a>
          </div>
        </div>
      </div>
    )
  }
}

HomeView.Prototype = {
  email: PropTypes.string,
  password: PropTypes.string,
  isLogedIn: PropTypes.bool,
  updateEmail: PropTypes.func,
  updatePassword: PropTypes.func,
  updateIsLogin: PropTypes.func,
}

export default HomeView
