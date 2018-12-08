import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../modules/constants'
import '../css/Chore.scss';

export const createChore = (id, name, description, createDate, expirationDate, roommateName) => {
  return {
    "id": id,
    "name": name,
    "description": description,
    "createDate": createDate,
    "expirationDate": expirationDate,
    "roommateName": roommateName
  }
}

export const Chore = (props) => {
  console.log(props)
  const handleClick = (event) => {
    let roommateName;
    if(props.roommateName === constants.UNASSIGNED_CHORE){
      roommateName = constants.ASSIGNED_TO_ME_CHORE
    }else if(props.roommateName === constants.ASSIGNED_TO_ME_CHORE){
      roommateName = constants.UNASSIGNED_CHORE
    }else{
      return
    }
    props.updateChore(createChore(props.id, props.name, props.description,
      props.createDate, props.expirationDate, roommateName));
  }

  const hoverMessage = () => {
    switch (props.roommateName) {
      case constants.UNASSIGNED_CHORE: "assign to me";
      case constants.ASSIGNED_TO_ME_CHORE: "unassign";
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

  //defualt background
  let backgroundExpiredDate = '';
  let backgroundChoreItem = '#00eeff';
  if(isExpiredDate()){
    //red
    backgroundChoreItem = '#FF0000';
    //white
    backgroundExpiredDate = '#ffffff'
  }


  return (
    <div className="chore-item" style={{background: backgroundChoreItem}} onClick={(event)=>handleClick(event)}>
      <div className="title">
        <div className="chore-name">{props.name}</div>
        <input type="checkbox" name="" value="" ></input>
      </div>
      <div className="chore-description">{props.description}</div>
      <div className="roommate-name">assigned to: {props.roommateName}</div>
      <div
            style={{background: backgroundExpiredDate}}
            className="expiration-date">Expiration Date: {props.expirationDate.toLocaleDateString("en-IL")}
      </div>
      <div className="assign-to-label">{() => (this.hoverMessage())}</div>
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
  updateChore : PropTypes.func,
}

export default Chore;
