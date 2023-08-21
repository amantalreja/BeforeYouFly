import React from 'react';
import { Chart } from "react-google-charts";

const MyPieChart = ({ flightDelayData }) => {
  // Extract the relevant data for the pie chart from the JSON response
  const formatDelayResult = (result) => {
    switch (result) {
      case 'LESS_THAN_30_MINUTES':
        return 'Less than 30 minutes';
      case 'BETWEEN_30_AND_60_MINUTES':
        return '30 to 60 minutes';
      case 'BETWEEN_60_AND_120_MINUTES':
        return '60 to 120 minutes';
      case 'OVER_120_MINUTES_OR_CANCELLED':
        return 'Over 120 minutes or cancelled';
      default:
        return 'Unknown';
    }
  };
  const chartData = flightDelayData.data.map(item => [formatDelayResult(item.result), parseFloat(item.probability)]);

  const options = {
    backgroundColor: 'transparent',
    legend: {
      textStyle: {
        color: 'white',
      },
    },
  };

  return (
    <Chart chartType="PieChart" data={[['Task', 'Probability'], ...chartData]} options={options} height="400px" />
  );
}

export default MyPieChart;
