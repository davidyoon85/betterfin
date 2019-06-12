import React, { Component } from 'react';
import * as d3 from 'd3';

import { Line } from 'react-chartjs-2';

const data = require('../data/data.json');

class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: data,
            chartData: {
                labels: data.balances[0].month_labels,
                datasets: [
                    {
                        // label: 'Month Average',
                        data: data.balances[0].month_average_values,
                        borderColor: 'rgba(246,102,82)',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'rgba(246,102,82)',
                    }
                ]
            }
        }

        // this.createBalanceChart = this.createBalanceChart.bind(this);
    }

    componentDidMount() {
        // this.createBalanceChart() 
    }

    render() {
        return (
            <div className="chart_section">
                <div className="balance_chart">
                    <div className="chart_header">Average Cash Balance</div>
                    <Line 
                        data={this.state.chartData}
                        // width={500}
                        // height={500}
                        options={{ 
                            
                            // title:{
                            //     display: true,
                            //     text: 'Monthly Averages',
                            //     fontColor: '#898B96',
                            //     fontSize: 20,
                            //     position: 'top'
                            // },
                            legend:{
                                display: false
                            },
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: '$ (USD)',
                                        fontStyle: 'bold'
                                    },
                                    ticks: {
                                        beginAtZero:true,
                                        max: Math.round( (1.5 * Math.max(...this.state.data.balances[0].month_average_values)) / 50) * 50,
                                        fontStyle: 'bold',

                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontStyle: 'bold',

                                    }
                                }]
                            },
                            tooltips: {
                                enabled: true,
                                backgroundColor: 'white',
                                borderColor: 'rgba(246,102,82)',
                                borderWidth: 2,
                                titleFontSize: 14,
                                titleFontColor: 'rgba(246,102,82)',
                                bodyFontColor: 'rgba(246,102,82)',
                                bodyFontStyle: 'bold',
                                xPadding: 15,
                                yPadding: 15,
                                displayColors: false
                            },
                            // maintainAspectRatio: false,
                            responsive: true,
                        }}
                    />
                </div>
                <div className="expense_chart">
                    
                </div>
            </div>
        )
    }
}

export default Chart;