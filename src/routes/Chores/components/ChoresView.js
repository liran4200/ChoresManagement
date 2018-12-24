import React from 'react'
import ChoreList from './ChoreList'
import PropTypes from 'prop-types'
import EditChoreModal from './EditChoreModal'
import '../css/ChoreView.scss'

export const ChoresView = (props) => {
  console.log(props)
    return (
        <div className='chore-view_continer'>
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
            <EditChoreModal
                showEditChoreModal={props.showEditChoreModal}
                hideEditModal={props.hideEditModal}
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
    hideEditChore: PropTypes.func,
    // showNewChoreModal: PropTypes.boolean,
}

export default ChoresView
