import React from "react";

import { Doughnut } from 'react-chartjs-2';

class Pie extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
debugger
    return (
      <Doughnut 
        data={{
          labels: this.props.monthExpenseTotals.janCategoriesTotals,
          datasets: [{
            data: this.props.monthExpenseTotals.janExpenseTotals,
            backgroundColor: [ '#f66652', '#537871', '#52f6a1', '#A7C958', '#FDEB00', '#52a7f6', '#7b52f6', '#cdf652' ]
          }]
        }}
      />
    );
  }
}

export default Pie;
