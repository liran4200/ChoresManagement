import React from 'react'
import ChoreList from './ChoreList'
import PropTypes from 'prop-types'
import ChoreModal from './ChoreModal'
import PieChart from './PieChart'
import * as constants from '../modules/constants'
import '../css/ChoreView.scss'

export const ChoresView = (props) => {
    const unassignedChoresListFilter = (value, index) => (value['roommateName'] === constants.UNASSIGNED_CHORE)
    const assignedToMeChoresListFilter = (value, index) => (value['roommateName'] === props.logedinUser)
    const assignedToOthersChoresListFilter = (value, index) => (![props.logedinUser, constants.UNASSIGNED_CHORE].includes(value['roommateName']))

    let unassignedChoresList = props.choresList.filter(unassignedChoresListFilter)
    let assignedToMeChoresList =props.choresList.filter(assignedToMeChoresListFilter)
    let assignedToOthersChoresList = props.choresList.filter(assignedToOthersChoresListFilter)
    console.log(props)
    return (
        <div className='chore-view_continer'>
            <div>
                <button className="btn btn-primary btn-block btn-lg" onClick={() => props.showNewModal()}>Create New Chore</button>
            </div>
            <div>
                <div className='chore-view_space' />
                    <ChoreList
                        title="Unassigned Chores"
                        chores={unassignedChoresList}
                        updateChore={props.updateChore}
                        removeChore={props.removeChore}
                        addScoreToUser={props.addScoreToUser}
                        addChore={props.addChore}
                        showBtnDone={false}
                        logedinUser={props.logedinUser}
                        showEditModal={props.showEditModal}
                    />
                    <ChoreList
                        title="My Chores"
                        chores={assignedToMeChoresList}
                        updateChore={props.updateChore}
                        removeChore={props.removeChore}
                        addScoreToUser={props.addScoreToUser}
                        addChore={props.addChore}
                        showBtnDone={true}
                        logedinUser={props.logedinUser}
                        showEditModal={props.showEditModal}
                    />
                    <ChoreList
                        title="Assigned Chores"
                        chores={assignedToOthersChoresList}
                        updateChore={props.updateChore}
                        removeChore={props.removeChore}
                        addScoreToUser={props.addScoreToUser}
                        addChore={props.addChore}
                        showBtnDone={false}
                        logedinUser={props.logedinUser}
                        showEditModal={props.showEditModal}
                    />
                <div className='chore-view_space' />
            </div>
                <PieChart
                    usersList={props.usersList}
                />
            <div>
            </div>
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
        </div>
    )
}

ChoresView.prototype = {
    updateChore: PropTypes.func,
    unassignedChoresList: PropTypes.array,
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
    addScoreToUser: PropTypes.func,
    shouldShowEditChoreModal: PropTypes.boolean,
    logedinUser: PropTypes.string,
    usersList: PropTypes.array,
}

export default ChoresView
