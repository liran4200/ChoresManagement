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
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">
                    Edit Chore
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
                  <label  className="col-sm-2 control-label"
                            for="inputEmail3">Name</label>
                  <div className="col-sm-10">
                      <input className="form-control"
                             placeholder="Rommate Name"
                             onChange={(e)=>props.changeChoreToEditNameField(e.target.value)}
                             value={props.choreToEdit.name}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Description</label>
                  <div className="col-sm-10">
                      <input className="form-control"
                             placeholder="Description"
                             onChange={(e)=>props.changeChoreToEditDescriptionField(e.target.value)}
                             value={props.choreToEdit.description}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Date</label>
                  <div className="col-sm-10">
                      <input className="form-control"
                             type="date"
                             placeholder="Expiration Date"
                             onChange={(e)=>props.changeChoreToEditExpirationField(e.target.value)}
                             value={expiredDateString}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <label>
                          <input type="checkbox"
                                 onChange={(e)=>props.changeChoreToEditRecurringField(e.target.value)}
                                 checked={props.choreToEdit.isRecurring}/> Recurring
                      </label>
                    </div>
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
  // <form className="edit-modal-chore-container" onSubmit={ handleSubmit }>
  //   <label>name:
  //   <input type="text" className="edit-modal-chore-name" onChange={(e)=>props.changeChoreToEditNameField(e.target.value)} value={props.choreToEdit.name}/>
  //   </label>
  //   <br/>
  //   <label>description:
  //   <input type="text" className="edit-modal-chore-description" onChange={(e)=>props.changeChoreToEditDescriptionField(e.target.value)} value={props.choreToEdit.description}/>
  //   </label>
  //   <br/>
  //   <label>expiration date:
  //   <input type="date" className="edit-modal-chore-expiration-date" onChange={(e)=>props.changeChoreToEditExpirationField(e.target.value)} value={expiredDateString} />
  //   </label>
  //   <br/>
  //   <label>recurring chore:
  //   <input type="checkbox" className="edit-modal-chore-is-recurring" onChange={(e)=>props.changeChoreToEditRecurringField(e.target.value)} value={props.choreToEdit.isRecurring}/>
  //   </label>
  //   <br/>
  //   <input type="submit" className="edit-modal-chore-submit-btn" value="submit"/>
  //   <button className="edit-modal-cancel-btn" onClick={(event) => handleCloseModal()}>cancel</button>
  // </form>
}

ChoreModal.prototype = {
  shouldShowEditChoreModal: PropTypes.boolean,
  hideEditModal: PropTypes.func,
  choreToEdit: PropTypes.object,
}

export default ChoreModal;
