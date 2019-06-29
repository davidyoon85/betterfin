import React, { Component } from "react";

import { Doughnut } from 'react-chartjs-2';

class Pie extends Component {
  constructor(props) {
    super(props);

    this.pieRef = React.createRef();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    let currentPie = this.pieRef.current.chartInstance;

    if (e.target.name === 'January') {      
      currentPie.config.data.datasets[0].backgroundColor = ['#f66652', '#537871', '#52f6a1', '#A7C958', '#FDEB00', '#52a7f6', '#7b52f6', '#cdf652'] 
      currentPie.config.data.datasets[0].data = this.props.monthExpenseTotals.janExpenseTotals;
      currentPie.config.data.labels = this.props.monthExpenseTotals.janCategoriesTotals;
      currentPie.config.options.title.text = 'January';
      currentPie.update();
    } else if (e.target.name === 'February') {
      currentPie.config.data.datasets[0].backgroundColor = ['#52a7f6', '#537871', '#f66652', '#A7C958']
      currentPie.config.data.datasets[0].data = this.props.monthExpenseTotals.febExpenseTotals;
      currentPie.config.data.labels = this.props.monthExpenseTotals.febCategoriesTotals;
      currentPie.config.options.title.text = 'February';
      currentPie.update();
    } else if (e.target.name === 'March') {      
      currentPie.config.data.datasets[0].backgroundColor = ['#A7C958', '#7b52f6', '#FF0000', '#537871', '#f66652']
      currentPie.config.data.datasets[0].data = this.props.monthExpenseTotals.marExpenseTotals;
      currentPie.config.data.labels = this.props.monthExpenseTotals.marCategoriesTotals;
      currentPie.config.options.title.text = 'March';
      currentPie.update();
    }
  }

  render() {
    return (
      <div className="pie_section">
        <div className="pie_chart">
          <div className="pie_header">
            Expense Details
            <div className="pie_buttons">
              <button name="January" onClick={this.clickHandler}>Jan</button>
              <button name="February" onClick={this.clickHandler}>Feb</button>
              <button name="March" onClick={this.clickHandler}>Mar</button>
            </div>
          </div>
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
                onHover: function(e) {
                  e.target.style.cursor = 'pointer';
                },
                display: true,
                position: 'right',
                labels: {
                  fontSize: 10,
                  padding: 15,
                  usePointStyle: true
                }
              },
              layout: {
                padding: {
                    left: -10,
                    right: -10,
                    top: -10,
                    bottom: -5
                }
              },
              title:{
                display: true,
                text: 'Janurary',
                position: 'left',
                padding: 10,
                fontSize: 24
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
              responsive: true
            }}
            
          />
        </div>
      </div>
    );
  }
}

export default Pie;
