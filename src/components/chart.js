import React, { Component } from 'react';
import * as d3 from 'd3';

import { Line } from 'react-chartjs-2';

const data = require('../data/data.json');

class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: data,
            trxs: data.trxs.transaction,
            monthly: {},
            chartData: {
                labels: data.balances[0].month_labels,
                datasets: [
                    {
                        data: data.balances[0].month_average_values,
                        borderColor: 'rgba(246,102,82)',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'rgba(246,102,82)',
                    }
                ]
            },
            pieData: {
                labels: data.balances[0].month_labels,
                datasets:[{
                    data: [10, 20, 30],
                    backgroundColor: [ 'red', 'blue', 'green']
                }]
            }
        }
    }

    componentDidMount() {
        // this.getData();
    }

    render() {

        return (
            <div className="chart_section">
                <div className="balance_chart">
                    <div className="chart_header">Average Cash Balance</div>
                    <Line 
                        data={this.state.chartData}
                        options={{ 
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
                                callbacks: {
                                    label: function(tooltipItem, data) {
                                        return tooltipItem.yLabel.toString().replace(/^/gm, "$"); }, },
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
                            // maintainAspectRatio: false,
                            responsive: true,
                        }}
                    />
                </div>
                <div className="expense_chart">
                    {/* <button onClick={() => janClick()}>January</button> */}
                    {/* <button onClick={() => febClick()}>February</button> */}
                    {/* <button onClick={() => marClick()}>March</button> */}

                    
                </div>
            </div>
        )
    }
}

export default Chart;