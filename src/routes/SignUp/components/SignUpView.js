import React from 'react';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types';


export const SignUpView = (props) => {
    return (
        <div className = "row">
            <div className = "col-md-4 col-md-offset-4">
                <SignUpForm userSignUpRequest = {props.userSignUpRequest}/>
            </div>
        </div>
    );
}


SignUpView.propTypes = {
    userSignupRequest: PropTypes.func.isReuiredת
    
}


export default SignUpView
