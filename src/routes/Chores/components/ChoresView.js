import React from 'react';
import ChoreList from './ChoreList'
import PropTypes from 'prop-types';
import '../css/ChoreView.scss'

export const ChoresView = (props) => {
    return (
        <div className='chore-view_continer'>
            <div className='chore-view_space'/>
            <ChoreList
                title="Unassigned Chores"
                chores={props.unassignedChoresList}
                updateChore={props.updateChore}
                showBtnDone={false}
            />
            <ChoreList
                title="My Chores"
                chores={props.assignedToMeChoresList}
                updateChore={props.updateChore}
                removeChore={props.removeChore}
                addChore={props.addChore}
                showBtnDone={true}
            />
            <ChoreList
                title="Assigned Chores"
                chores={props.assignedToOthersChoresList}
                updateChore={props.updateChore}
                showBtnDone={false}
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
}

export default ChoresView
