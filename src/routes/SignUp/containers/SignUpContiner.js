/*
####################################################################
This is a container component. Notice it does not contain any JSX,
nor does it import React. This component is **only** responsible for
wiring in the actions and state necessary to render a presentational
component
####################################################################
*/
import { connect } from 'react-redux'
import { actions } from '../modules/actions'
import SignUpView from '../components/SignUpView'

const mapDispatchToProps = {...actions}

const mapStateToProps = (state) => (
    {
        username: state.signUp.username,
        password: state.signUp.password,
        passwordConf: state.signUp.passwordConf,
        isLogedIn: state.home.isLogedIn,
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView)