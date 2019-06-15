import React from "react";

import { Doughnut } from 'react-chartjs-2';

class Pie extends React.Component {
  constructor(props) {
    super(props);

    this.pieRef = React.createRef();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    let currentPie = this.pieRef.current.chartInstance;
    let pieData = currentPie.config.data.datasets[0].data;
    let pieLabels = pieData.labels;

    let newData = [{
      data: this.props.monthExpenseTotals.febExpenseTotals,
      backgroundColor: [ '#f66652', '#537871', '#52f6a1', '#A7C958' ]
    }]

    if (e.target.name === 'January') {    
    debugger      
      currentPie.config.data.datasets[0].data = [];
      currentPie.config.data.labels = [];
      debugger
      // currentPie.data.data
      currentPie.config.data.datasets[0].data = this.props.monthExpenseTotals.febExpenseTotals;
      currentPie.config.data.labels = this.props.monthExpenseTotals.febCategoriesTotals;
      // pieData = newData
      // pieLabels = this.props.monthExpenseTotals.febCategoriesTotals
      debugger
      currentPie.update();
    } else if (e.target.name === 'February') {
    
    } else if (e.target.name === 'March') {

    }
  }

  render() {
    return (
      <div className="pie_section">
        <div className="pie_chart">
          <div className="pie_header">Expenses Details</div>
          <button name="January" onClick={this.clickHandler}>January</button>
          <button name="February" onClick={this.clickHandler}>February</button>
          <button name="March" onClick={this.clickHandler}>March</button>
          <Doughnut 
            ref={this.pieRef}
            data={{
              labels: this.props.monthExpenseTotals.janCategoriesTotals,
              datasets: [{
                data: this.props.monthExpenseTotals.janExpenseTotals,
                backgroundColor: [ '#f66652', '#537871', '#52f6a1', '#A7C958', '#FDEB00', '#52a7f6', '#7b52f6', '#cdf652' ]
              }]
            }}
            options={{ 
              legend:{
                  display: true,
                  position: 'right',
                  labels: {
                    fontSize: 15,
                    padding: 25
                  }
              },
              tooltips: {
                enabled: true,
                callbacks: {
                    label: function(tooltipItem, data) {
                        const category = data.labels[tooltipItem.index];
                        const expense = (data.datasets[0].data[tooltipItem.index]).toLocaleString('USD', { style: 'currency', currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        return category + '  ' + expense }, },
                backgroundColor: 'white',
                borderColor: 'rgba(246,102,82)',
                borderWidth: 2,
                titleFontSize: 14,
                titleFontColor: 'rgba(246,102,82)',
                bodyFontColor: 'rgba(246,102,82)',
                bodyFontStyle: 'bold',
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
            },
              maintainAspectRatio: true,
              responsive: true,
            }}
            
          />
        </div>
      </div>
    );
  }
}

export default Pie;
