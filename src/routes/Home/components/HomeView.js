import React, { Component } from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'
import { notifyError } from '../../../components/notify'
import '../css/HomeView.scss';

class HomeView extends Component {
  componentWillMount(){
    if(this.props.isLogedIn){
      notifyError("You are logged in, redirecting you to chores dashboard")
      console.log("redirecting to /chores")
      browserHistory.push('/chores')
    }
  }

  componentDidUpdate(){
      console.log(`in will update ${this.props.isLogedIn}`)
      if(this.props.isLogedIn){
        console.log("redirecting to /chores")
        browserHistory.push('/chores')
      }
  }
  
  render() {
    console.log(`im HomeView in props ${JSON.stringify(this.props)}`)
    return (
      <div className="homeView-container">
        <div className='login-continer'>
          <h5 className="card-title text-center">Sign In</h5>
          <LoginForm
            email={this.props.email}
            password={this.props.password}
            updateEmail={this.props.updateEmail}
            updatePassword={this.props.updatePassword}
            updateIsLogin={this.props.updateIsLogin}
          />
          <div className="panel-footer">
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
