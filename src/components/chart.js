import React, { Component } from 'react';
import * as d3 from 'd3';

import { Line, Pie } from 'react-chartjs-2';

const data = require('../data/data.json');

class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: data,
            trxs: data.trxs.transaction,
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
            },
            pieData: {
                labels: data.balances[0].month_labels,
                datasets:[{
                    data: [10, 20, 30],
                    backgroundColor: [ 'red', 'blue', 'green']
                }]
            }
        }

        // this.createBalanceChart = this.createBalanceChart.bind(this);
    }

    componentDidMount() {
        
    }

    render() {
        const janExpenses = [];
        const janCategories = {};
        let janTotal = 0;
        const febExpenses = [];
        const febCategories = {};
        let febTotal = 0;
        const marExpenses = [];
        const marCategories = {};
        let marTotal = 0;

        this.state.trxs.forEach((ele) => {
            // debugger
            if (ele.baseType === 'DEBIT') {
                if (ele.postDate.includes('2019-01')) {
                    janTotal += ele.amount.amount;
                    let count = 0;
                    janCategories[ele.category] = count + ele.amount.amount;
                    janExpenses.push({ele});
                } else if (ele.postDate.includes('2019-02')) {
                    febTotal += ele.amount.amount;
                    febCategories[ele.category] = 0;
                    febCategories[ele.category] += ele.amount.amount;
                    febExpenses.push({ele});
                } else if (ele.postDate.includes('2019-03')) {
                    marTotal += ele.amount.amount;
                    marCategories[ele.category] = 0;
                    marCategories[ele.category] += ele.amount.amount;
                    marExpenses.push({ele});
                } 
            }
        })
        debugger
        const totalExpenses = [janTotal, febTotal, marTotal]



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
                    <Pie 
                    data={{
                        labels: this.state.pieData.labels,
                        datasets: this.state.pieData.datasets
                    }}
                    // height='100%'
                    />
                </div>
            </div>
        )
    }
}

export default Chart;