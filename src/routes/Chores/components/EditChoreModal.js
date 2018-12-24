import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../modules/constants'
import ReactModal from 'react-modal';
import '../css/EditChoreModal.scss';


export const EditChoreModal = (props) => {
  const handleCloseModal = () => {
    props.hideEditModal("chore")
  }

  const handleSubmit = () => {
    props.updateChore(props.choreToEdit.id, FormName, FormDescription,
      props.choreToEdit.createDate ,FormExpirationDate , props.choreToEdit.roommateName, FormIsRecurring)
  }

  console.log(props.choreToEdit)
  const expiredDate = (props.choreToEdit.expirationDate != null) ?
                            `${props.choreToEdit.expirationDate.toLocaleDateString("en-IL")}` : null
  return (
      <ReactModal isOpen={props.shouldShowEditChoreModal} className="Modal">
      <div className="edit-modal-container">
        <div className="edit-modal-title"> Edit Chore </div>
        <form className="edit-modal-chore-container" onSubmit={(event) => handleSubmit()}>
          <label>name:
          <input type="text" className="edit-modal-chore-name" value={props.choreToEdit.name}/>
          </label>
          <br/>
          <label>description:
          <input type="text" className="edit-modal-chore-description" value={props.choreToEdit.description}/>
          </label>
          <br/>
          <label>expiration date:
          <input type="text" className="edit-modal-chore-expiration-date" value={expiredDate}/>
          </label>
          <br/>
          <label>recurring chore:
          <input type="checkbox" className="edit-modal-chore-is-recurring" value={props.choreToEdit.isRecurring}/>
          </label>
          <br/>
          <input type="submit" className="edit-modal-chore-submit-btn" value="submit"/>
        </form>
        <button className="edit-modal-cancel-btn" onClick={(event) => handleCloseModal()}>cancel</button>
        </div>
      </ReactModal>
  );
}

EditChoreModal.prototype = {
  shouldShowEditChoreModal: PropTypes.boolean,
  hideEditModal: PropTypes.func,
  choreToEdit: PropTypes.object,
}

export default EditChoreModal;
