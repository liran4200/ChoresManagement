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
import * as constants from '../modules/constants'
import ChoresView from '../components/ChoresView'

const unassignedChoresListFilter = (value, index) => (value['roommateName'] === constants.UNASSIGNED_CHORE)
const assignedToMeChoresListFilter = (value, index) => (value['roommateName'] === constants.ASSIGNED_TO_ME_CHORE)
const assignedToOthersChoresListFilter = (value, index) => (![constants.ASSIGNED_TO_ME_CHORE, constants.UNASSIGNED_CHORE].includes(value['roommateName']))

const mapDispatchToProps = {...actions}

const mapStateToProps = (state) => (
    {
        unassignedChoresList : state.chores.choresList.filter(unassignedChoresListFilter),
        assignedToMeChoresList: state.chores.choresList.filter(assignedToMeChoresListFilter),
        assignedToOthersChoresList: state.chores.choresList.filter(assignedToOthersChoresListFilter),
        shouldShowEditChoreModal: state.chores.shouldShowEditChoreModal,
        choreToEdit: state.chores.choreToEdit,
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ChoresView)