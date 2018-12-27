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
import HomeView from '../components/HomeView'


const mapDispatchToProps = {...actions}

const mapStateToProps = (state) => {
    return {
      email: state.home.email,
      password: state.home.password,
      isLogedIn: state.home.isLogedIn,
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeView);