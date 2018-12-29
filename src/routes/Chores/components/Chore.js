import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../modules/constants'
import { markAsAssigenedToMe , markAsDone, markAsUnassigene, addNewChore } from '../../../serverCalls/activityAPI'
import { notifyError } from '../../../components/notify'
import '../css/Chore.scss';

export const Chore = (props) => {
  // add is reacuring and description
  const handleClick = async (event) => {
    try {
      if(props.roommateName === constants.UNASSIGNED_CHORE){
        await markAsAssigenedToMe(props.id, props.logedinUser)
      }else if(props.roommateName === props.logedinUser){
        await markAsUnassigene(props.id, props.logedinUser)
      }else{
        return
      }
      await props.updateChoreList(props.logedinUser)  
    } catch (error) {
      notifyError(error)
    }
  }

  const isExpiredDate = () => {
    let now = new Date();
    //set time to 0 in order to check only date
    now.setHours(0, 0, 0, 0);
    if(now > props.expirationDate)
      return true;
    return false;
  }

  const handleClickDone = async () => {
    try {
      await markAsDone(props.id, props.logedinUser);
      if(props.isRecurring){
          console.log("recurring chore!!")
          //generate afterTomorrow day for recurring chore
          let tomorrow = props.expirationDate;
          let afterTomorrow = new Date();
          afterTomorrow.setDate(tomorrow.getDate() + 1);
          //add recurring chore
          await addNewChore(props.logedinUser, props.name, afterTomorrow, props.score, props.isRecurring, props.description)
      }
      await props.loadChorePage(props.logedinUser)  
    } catch (error) {
      notifyError(error)
    }
  }

  const handleClickEdit = () => {
    console.log("edit chore!");
    props.showEditModal(props.id);
  }

  //defualt background
  let backgroundExpiredDate = '';
  let backgroundChoreItem = '#5f9ea0';
  if(isExpiredDate()){
    //red
    backgroundChoreItem = '#FF0000';
    //white
    backgroundExpiredDate = '#6C757C';
  }

  const btnDoneItem = props.showBtnDone?
                        (<button type="button"
                                 className="btn btn-secondary"
                                 onClick= { (event) => handleClickDone()}>
                                 Done </button>)  : ( null );

  return (
    <div className="card mb-3"
          style={{
            maxWidth:'18rem',
            background: backgroundChoreItem}}>
        <div onClick={(event)=>handleClick(event)}>
            <div className="card-header bg-transparent"><h5>{props.name}</h5></div>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <h4>assigned to: {props.roommateName}</h4>
                <h5 className="card-title"
                      style={{background: backgroundExpiredDate}}>
                      Expiration Date: {props.expirationDate.toLocaleDateString("en-IL")}
                </h5>
            </div>
        </div>
        <div className="card-footer bg-transparent ">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button"
                      className="btn btn-secondary"
                      onClick= {(event) => handleClickEdit()}>
                      Edit
              </button>
              {btnDoneItem}
            </div>
        </div>
    </div>
  );
}

Chore.prototype = {
  id : PropTypes.string,
  name : PropTypes.string,
  description : PropTypes.string,
  createDate : PropTypes.object,
  expirationDate : PropTypes.object,
  roommateName : PropTypes.string,
  isRecurring: PropTypes.boolean,
  score: PropTypes.number,
  updateChoreList: PropTypes.func,
  showBtnDone: PropTypes.bool,
  showEditModal: PropTypes.func,
  logedinUser: PropTypes.string
}

export default Chore;
