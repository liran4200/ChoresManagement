import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { addNewChore, editChore } from '../../../serverCalls/activityAPI'
import { notifyError } from '../../../components/notify'

import '../css/ChoreModal.scss';

export const ChoreModal = (props) => {
  const handleCloseModal = () => {
    props.hideEditModal()
  }

  const handelDate = (dateString) => {
    let dd = props.choreToEdit.expirationDate.getDate()
    let mm = props.choreToEdit.expirationDate.getMonth() + 1
    let yyyy = props.choreToEdit.expirationDate.getFullYear()
    if (!dd || !mm || !yyyy) {
      return -1
    }
    if (dd < 10) {
      dd = `0${dd}`
    } else {
      dd = `${dd}`
    }
    if (mm < 10) {
      mm = `0${mm}`
    } else {
      mm = `${mm}`
    }
    return `${yyyy}-${mm}-${dd}`
  }

  const expiredDateString = (props.choreToEdit.expirationDate != null) ? handelDate(props.choreToEdit.expirationDate) : null

  const handleSubmit = async (e) => {
    console.log("expiredDateString")
    console.log(expiredDateString)
    e.preventDefault()
    if (props.choreToEdit.name == "") {
      notifyError("You must fill all the fields, name is empty")
      return
    } else if (props.choreToEdit.description == "") {
      notifyError("You must fill all the fields, name is description")
      return
    } else if (props.choreToEdit.score < 0) {
      notifyError("Score can't be negative")
      return
    } else if (expiredDateString < 0) {
      notifyError("Must chose an expiration date")
      return
    }
    if (props.choreToEdit.id == "newChore") {
      await addNewChore(props.logedinUser, props.choreToEdit.name, expiredDateString, props.choreToEdit.score,
        props.choreToEdit.isRecurring, props.choreToEdit.description)
    } else {
      await editChore(props.logedinUser, props.choreToEdit.id, props.choreToEdit.name, expiredDateString,
        props.choreToEdit.score, props.choreToEdit.description, props.choreToEdit.isRecurring, props.choreToEdit.roommateName)
    }
    props.updateChoreList(props.logedinUser)
    props.hideEditModal()
  }

  console.log("chore to edit is" + JSON.stringify(props.choreToEdit))
  return (
    <ReactModal isOpen={props.shouldShowEditChoreModal} className="Modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="myModalLabel">
              {props.choreToEdit.id == "newChore" ? "New Chore" : "Edit Chore"}
            </h4>
            <button type="button" className="close"
              dataDismiss="modal">
              <span ariaHidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="modal-body">

            <form className="form-horizontal" role="form">
              <div className="form-group">
                <label className="col-sm-2 control-label"
                  for="inputEmail3">Name</label>
                <div className="col-sm-10">
                  <input className="form-control"
                    placeholder="Name"
                    onChange={(e) => props.changeChoreToEditNameField(e.target.value)}
                    value={props.choreToEdit.name} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                  <input className="form-control"
                    placeholder="Description"
                    onChange={(e) => props.changeChoreToEditDescriptionField(e.target.value)}
                    value={props.choreToEdit.description} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Date</label>
                <div className="col-sm-10">
                  <input className="form-control"
                    type="date"
                    placeholder="Expiration Date"
                    onChange={(e) => props.changeChoreToEditExpirationField(e.target.value)}
                    value={expiredDateString} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox"
                        onChange={(e) => props.changeChoreToEditRecurringField(e.target.value)}
                        checked={props.choreToEdit.isRecurring} /> Recurring
                      </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Score</label>
                <div className="col-sm-10">
                  <input className="form-control"
                    type="number"
                    placeholder="Description"
                    onChange={(e) => props.changeChoreToEditScoreField(e.target.value)}
                    value={props.choreToEdit.score} />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={(event) => handleCloseModal()}>
              Close
                </button>
            <button type="button" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>
              Save changes
                </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

ChoreModal.prototype = {
  shouldShowEditChoreModal: PropTypes.boolean,
  hideEditModal: PropTypes.func,
  choreToEdit: PropTypes.object,
  updateChoreList: PropTypes.func,
  logedinUser: PropTypes.string,
  changeChoreToEditNameField: PropTypes.func,
  changeChoreToEditDescriptionField: PropTypes.func,
  changeChoreToEditExpirationField: PropTypes.func,
  changeChoreToEditRecurringField: PropTypes.func,
  changeChoreToEditScoreField: PropTypes.func,
}

export default ChoreModal;
