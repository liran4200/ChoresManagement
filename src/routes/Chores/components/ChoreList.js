import React from 'react';
import PropTypes from 'prop-types';
import Chore from './Chore';
import '../css/ChoreList.scss';

export const ChoreList = (props) => {
  return (
    <div className="chore-list_continer">
      <div className="list-title">
        <h1>{props.title}</h1>
      </div>
      {props.chores.map(chore => {
        return(
          <Chore
            id={chore.id}
            name={chore.name}
            description={chore.description}
            createDate={chore.createDate}
            expirationDate={chore.expirationDate}
            roommateName={chore.roommateName}
            isRecurring={chore.isRecurring}
            score={chore.score}
            updateChore={props.updateChore}
            removeChore={props.removeChore}
            addChore={props.addChore}
            showBtnDone={props.showBtnDone}
            showEditModal={props.showEditModal}
            addScoreToUser={props.addScoreToUser}
            logedinUser={props.logedinUser}
          />
        )
      })
     }
    </div>
  );
}

ChoreList.prototype = {
  title: PropTypes.string,
  chores: PropTypes.array,
  updateChore: PropTypes.func,
}

export default ChoreList;
