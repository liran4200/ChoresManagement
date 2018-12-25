import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import '../css/ChoreModal.scss';

export const ChoreModal = (props) => {
  const handleCloseModal = () => {
    props.hideEditModal()
  }

  const handelDate = (dateString) => {
    let dd = props.choreToEdit.expirationDate.getDate()
    let mm = props.choreToEdit.expirationDate.getMonth()+1
    let yyyy = props.choreToEdit.expirationDate.getFullYear()

    if(dd<10){
      dd = `0${dd}`
    }else{
      dd = `${dd}`
    }
    if(mm<10){
      mm = `0${mm}`
    }else{
      mm = `${mm}`
    }
    return `${yyyy}-${mm}-${dd}`
  }

  const expiredDateString = (props.choreToEdit.expirationDate != null) ? handelDate(props.choreToEdit.expirationDate) : null

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateChore({
      "id":               props.choreToEdit.id,
      "name":             props.choreToEdit.name,
      "description":      props.choreToEdit.description,
      "createDate":       props.choreToEdit.createDate,
      "expirationDate":   new Date(expiredDateString),
      "roommateName":     props.choreToEdit.roommateName,
      "isRecurring":      props.choreToEdit.isRecurring
    })
    props.hideEditModal()
  }

  console.log("chore to edit is" + JSON.stringify(props.choreToEdit))
  return (
      <ReactModal isOpen={props.shouldShowEditChoreModal} className="Modal">
      <div className="edit-modal-container">
        <div className="edit-modal-title"> Edit Chore </div>
        <form className="edit-modal-chore-container" onSubmit={ handleSubmit }>
          <label>name:
          <input type="text" className="edit-modal-chore-name" onChange={(e)=>props.changeChoreToEditNameField(e.target.value)} value={props.choreToEdit.name}/>
          </label>
          <br/>
          <label>description:
          <input type="text" className="edit-modal-chore-description" onChange={(e)=>props.changeChoreToEditDescriptionField(e.target.value)} value={props.choreToEdit.description}/>
          </label>
          <br/>
          <label>expiration date:
          <input type="date" className="edit-modal-chore-expiration-date" onChange={(e)=>props.changeChoreToEditExpirationField(e.target.value)} value={expiredDateString} />
          </label>
          <br/>
          <label>recurring chore:
          <input type="checkbox" className="edit-modal-chore-is-recurring" onChange={(e)=>props.changeChoreToEditRecurringField(e.target.value)} value={props.choreToEdit.isRecurring}/>
          </label>
          <br/>
          <input type="submit" className="edit-modal-chore-submit-btn" value="submit"/>
        </form>
        <button className="edit-modal-cancel-btn" onClick={(event) => handleCloseModal()}>cancel</button>
        </div>
      </ReactModal>
  );
}

ChoreModal.prototype = {
  shouldShowEditChoreModal: PropTypes.boolean,
  hideEditModal: PropTypes.func,
  choreToEdit: PropTypes.object,
}

export default ChoreModal;
