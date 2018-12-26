import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../modules/constants'
import '../css/Chore.scss';

export const createChore = (
  id,
  name,
  description,
  createDate,
  expirationDate,
  roommateName,
  isRecurring,
  score
) => {
      return {
        "id":             id,
        "name":           name,
        "description":    description,
        "createDate":     createDate,
        "expirationDate": expirationDate,
        "roommateName":   roommateName,
        "isRecurring":    isRecurring,
        "score":          score,
      }
}

export const Chore = (props) => {

  const handleClick = (event) => {
    let roommateName;
    if(props.roommateName === constants.UNASSIGNED_CHORE){
      roommateName = props.logedinUser
    }else if(props.roommateName === props.logedinUser){
      roommateName = constants.UNASSIGNED_CHORE
    }else{
      return
    }
    props.updateChore(createChore(props.id, props.name, props.description,
      props.createDate, props.expirationDate, roommateName, props.isRecurring, props.score));
  }

  const hoverMessage = () => {
    switch (props.roommateName) {
      case constants.UNASSIGNED_CHORE: "assign to me";
      case props.logedinUser: "unassign";
      default: "this chore is already assigned";
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

  const handleClickDone = () => {
    props.addScoreToUser({"username": props.roommateName ,"score":  props.score})
    props.removeChore(props.id);
    if(props.isRecurring){
        console.log("recurring chore!!")
        //generate afterTomorrow day for recurring chore
        let tomorrow = props.expirationDate;
        let afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        //add recurring chore
        props.addChore(
          createChore(props.id, props.name, props.description,
            new Date() ,afterTomorrow , constants.UNASSIGNED_CHORE, props.isRecurring, props.score)
        )
    }
  }

  const handleClickEdit = () => {
    console.log("edit chore!");
    props.showEditModal(props.id);
  }

  //defualt background
  let backgroundExpiredDate = '';
  let backgroundChoreItem = '#00eeff';
  if(isExpiredDate()){
    //red
    backgroundChoreItem = '#FF0000';
    //white
    backgroundExpiredDate = '#ffffff';
  }

  const btnDoneItem = props.showBtnDone?
                        (<li>
                          <button onClick= { (event) => handleClickDone()}>
                            Done
                          </button>
                        </li> )  : ( null );

  return (
    <div className="chore-item" style={{background: backgroundChoreItem}} >
      <div onClick={(event)=>handleClick(event)}>
          <div className="title">
            <div className="chore-name">{props.name}</div>
          </div>
          <div className="chore-description">{props.description}</div>
          <div className="roommate-name">assigned to: {props.roommateName}</div>
          <div
                style={{background: backgroundExpiredDate}}
                className="expiration-date">Expiration Date: {props.expirationDate.toLocaleDateString("en-IL")}
          </div>
          <div className="assign-to-label">{() => (this.hoverMessage())}</div>
      </div>
      <div className="footer-menu">
            <ul className="list-menu">
                {btnDoneItem}
                <li>
                  <button onClick= {(event) => handleClickEdit()}>Edit</button>
                </li>
            </ul>
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
  updateChore : PropTypes.func,
  removeChore : PropTypes.func,
  addChore : PropTypes.func,
  addScoreToUser : PropTypes.func,
  showEditModal: PropTypes.func,
  logedinUser: PropTypes.string
}

export default Chore;
