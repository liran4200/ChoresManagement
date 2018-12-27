import React, { Component } from 'react'
import ChoreList from './ChoreList'
import PropTypes from 'prop-types'
import ChoreModal from './ChoreModal'
import PieChart from './PieChart'
import * as constants from '../modules/constants'
import { browserHistory } from 'react-router'
import '../css/ChoreView.scss'

class ChoresView extends Component {
    // ADD ERRORS
    componentWillMount() {
        if (!this.props.isLogedIn) {
            console.log("user is not logged in!")
            browserHistory.push("/")
        }
        if (!this.props.isPageLoaded) {
            console.log("im chore view getting users!")
            this.props.updateUserList()
            this.props.updateChoreList()
            this.props.changePageLoaded(true)
        }
    }

    render() {
        console.log(`Im chore view here is my props: ${this.props}`)
        if (!this.props.isPageLoaded) {
            return (<div />)
        }
        const unassignedChoresListFilter = (value, index) => (value['roommateName'] === constants.UNASSIGNED_CHORE)
        const assignedToMeChoresListFilter = (value, index) => (value['roommateName'] === this.props.logedinUser)
        const assignedToOthersChoresListFilter = (value, index) => (![this.props.logedinUser, constants.UNASSIGNED_CHORE].includes(value['roommateName']))

        let unassignedChoresList = this.props.choresList.filter(unassignedChoresListFilter)
        let assignedToMeChoresList = this.props.choresList.filter(assignedToMeChoresListFilter)
        let assignedToOthersChoresList = this.props.choresList.filter(assignedToOthersChoresListFilter)
        return (
            <div className='chore-view_continer'>
                <div>
                    <div>
                        <button onClick={() => this.props.showNewModal()}>Create New Chore</button>
                    </div>
                    <div className='chore-view_space' />
                    <ChoreList
                        title="Unassigned Chores"
                        chores={unassignedChoresList}
                        updateChoreList={this.props.updateChoreList}
                        showBtnDone={false}
                        logedinUser={this.props.logedinUser}
                        showEditModal={this.props.showEditModal}
                    />
                    <ChoreList
                        title="My Chores"
                        chores={assignedToMeChoresList}
                        updateChoreList={this.props.updateChoreList}
                        showBtnDone={true}
                        logedinUser={this.props.logedinUser}
                        showEditModal={this.props.showEditModal}
                    />
                    <ChoreList
                        title="Assigned Chores"
                        chores={assignedToOthersChoresList}
                        updateChoreList={this.props.updateChoreList}
                        showBtnDone={false}
                        logedinUser={this.props.logedinUser}
                        showEditModal={this.props.showEditModal}
                    />
                    <div className='chore-view_space' />
                </div>
                <PieChart
                    usersList={this.props.usersList}
                />
                <div>
                </div>
                <ChoreModal
                    shouldShowEditChoreModal={this.props.shouldShowEditChoreModal}
                    hideEditModal={this.props.hideEditModal}
                    choreToEdit={this.props.choreToEdit}
                    updateChoreList={this.props.updateChoreList}
                    changeChoreToEditNameField={this.props.changeChoreToEditNameField}
                    changeChoreToEditDescriptionField={this.props.changeChoreToEditDescriptionField}
                    changeChoreToEditExpirationField={this.props.changeChoreToEditExpirationField}
                    changeChoreToEditRecurringField={this.props.changeChoreToEditRecurringField}
                    changeChoreToEditScoreField={this.props.changeChoreToEditScoreField}
                />
            </div>
        )
    }
}

ChoresView.prototype = {
    choresList: PropTypes.array,
    shouldShowEditChoreModal: PropTypes.boolean,
    logedinUser: PropTypes.string,
    userList: PropTypes.array,
    choreToEdit: PropTypes.object,
    isPageLoaded: PropTypes.boolean,
    updateUserList: PropTypes.func,
    updateChoreList: PropTypes.func,
    showEditModal: PropTypes.func,
    showNewModal: PropTypes.func,
    hideEditModal: PropTypes.func,
    changePageLoaded: PropTypes.func,
    changeChoreToEditNameField: PropTypes.func,
    changeChoreToEditDescriptionField: PropTypes.func,
    changeChoreToEditExpirationField: PropTypes.func,
    changeChoreToEditRecurringField: PropTypes.func,
    changeChoreToEditScoreField: PropTypes.func,
}

export default ChoresView
