
import React from 'react'


export const SignUpForm = (props) => {

    const onChangeUserName = (event) => {
        
    }
    const onChangePassword = (event) => {
        
    }
    const onSubmit = (event) => {
        e.preventDefault();
        console.log(this.state); //for debugging porpuses
        this.props.userSignupRequest(this.state);
    }

    return(
        <form onSubmit = { (event) => onSubmit(event) }>
            <h1>SignUp Chore Management!</h1>
            <div className = "form-group">
                <label className = "control-label">
                Username </label>
                <input
                    value = {this.state.username}
                    onChange = { (event) => onChangeUserName(event)}
                    type = "text"
                    name = "username"
                    className = "form-control"
                />
            </div>

            <div className = "form-group">
                <label className = "control-label">
                password </label>
                <input
                    value = {this.state.password}
                    onChange = { (event) => onChangePassword(event)}
                    type = "password"
                    name = "password"
                    className = "form-control"
                />
            </div>

            <div className = "form-group">
                <label className = "control-label">
                passwordConfirmation </label>
                <input
                    value = {this.state.passwordConfirmation}
                    onChange = { (event) => onChangePassword(event)}
                    type = "passwordConfirmation"
                    name = "password"
                    className = "form-control"
                />
            </div>

            <div className = "from-group">
                <button className = "btn btn-primary btn-lg">
                Sign up
                </button>
            </div>
        </form>
        );
}

SignUpForm.propTypes = {
    userSignupRequest: PropTypes.func.isReuired
}

export default SignUpForm;