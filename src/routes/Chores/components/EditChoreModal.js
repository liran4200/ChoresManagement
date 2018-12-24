import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../modules/constants'
import ReactModal from 'react-modal';
import '../css/EditChoreModal.scss';


export const EditChoreModal = (props) => {
  // console.log(props)
  const handleCloseModal = () => {
    props.hideEditModal("chore")
  }

  return (
      <ReactModal isOpen={props.showEditChoreModal}> hi
        <button onClick={(event) => handleCloseModal()}>close</button>
      </ReactModal>
  );
}

EditChoreModal.prototype = {
  showEditChoreModal: PropTypes.boolean,
  hideEditModal: PropTypes.func,
}

export default EditChoreModal;
