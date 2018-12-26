import React from 'react';
import PropTypes from 'prop-types';
//import '../css/PieChart.scss';
import { Doughnut } from 'react-chartjs-2';
import { randomColor } from 'randomcolor';

export const PieChart = (props) => {
    const colors = randomColor({count: props.usersList.length})
    const input = {
        labels: props.usersList.map((user)=>user.username),
        datasets : [{
            data: props.usersList.map((user)=>user.score),
            backgroundColor: colors,
            hoverBackgroundColor: colors
        }]
    }
    console.log(JSON.stringify(input))
    return (
        <div>
          <h2>House Scores</h2>
          <Doughnut  data = { input } />
        </div>
      );
  }

export default PieChart;
