import React from 'react';
import { PieChart } from 'react-google-charts';

const MyPieChart = () => {
  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];

  const options = {
    title: 'My Daily Activities',
  };

  return (
    <div className="App">
      <PieChart chartType="PieChart" data={data} options={options} width="100%" height="400px" />
    </div>
  );
}

export default MyPieChart;
