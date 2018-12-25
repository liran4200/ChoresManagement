import React from 'react'
import ChoreList from './ChoreList'
import PropTypes from 'prop-types'
import ChoreModal from './ChoreModal'
import '../css/ChoreView.scss'

export const ChoresView = (props) => {
  console.log(props)
    return (
        <div className='chore-view_continer'>
            <button onClick={()=>props.showNewModal()}>Create New Chore</button>
            <div className='chore-view_space'/>
            <ChoreList
                title="Unassigned Chores"
                chores={props.unassignedChoresList}
                updateChore={props.updateChore}
                showBtnDone={false}
                showEditModal={props.showEditModal}
            />
            <ChoreList
                title="My Chores"
                chores={props.assignedToMeChoresList}
                updateChore={props.updateChore}
                removeChore={props.removeChore}
                addChore={props.addChore}
                showBtnDone={true}
                showEditModal={props.showEditModal}
            />
            <ChoreList
                title="Assigned Chores"
                chores={props.assignedToOthersChoresList}
                updateChore={props.updateChore}
                showBtnDone={false}
                showEditModal={props.showEditModal}
            />
            <ChoreModal
                shouldShowEditChoreModal={props.shouldShowEditChoreModal}
                hideEditModal={props.hideEditModal}
                choreToEdit={props.choreToEdit}
                updateChore={props.updateChore}
                changeChoreToEditNameField={props.changeChoreToEditNameField}
                changeChoreToEditDescriptionField={props.changeChoreToEditDescriptionField}
                changeChoreToEditExpirationField={props.changeChoreToEditExpirationField}
                changeChoreToEditRecurringField={props.changeChoreToEditRecurringField}
            />

            <div className='chore-view_space'/>
        </div>
    )
}

ChoresView.prototype = {
    updateChore: PropTypes.func,
    unassignedChoresList : PropTypes.array,
    assignedToMeChoresList: PropTypes.array,
    assignedToOthersChoresList: PropTypes.array,
    showEditChore: PropTypes.func,
    showNewModal: PropTypes.func,
    hideEditChore: PropTypes.func,
    changeChoreToEditNameField: PropTypes.func,
    changeChoreToEditDescriptionField: PropTypes.func,
    changeChoreToEditExpirationField: PropTypes.func,
    changeChoreToEditRecurringField: PropTypes.func,
    changeChoreToNewNameField: PropTypes.func,
    changeChoreToNewDescriptionField: PropTypes.func,
    changeChoreToNewExpirationField: PropTypes.func,
    changeChoreToNewRecurringField: PropTypes.func,
    shouldShowEditChoreModal: PropTypes.boolean,
}

export default ChoresView
