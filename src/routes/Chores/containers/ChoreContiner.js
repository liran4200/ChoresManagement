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
import ChoresView from '../components/ChoresView'

const mapDispatchToProps = {...actions}

const mapStateToProps = (state) => (
    {
        choresList : state.chores.choresList,
        shouldShowEditChoreModal: state.chores.shouldShowEditChoreModal,
        choreToEdit: state.chores.choreToEdit,
        logedinUser: state.home.email,
        userList: state.chores.userList,
        isPageLoaded: state.chores.isPageLoaded,
        isLogedIn: state.home.isLogedIn,
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ChoresView)
