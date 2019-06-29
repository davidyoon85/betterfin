import React from 'react';

import { Line } from 'react-chartjs-2';

const Chart = (props) => {
    return (
        <div className="chart_section">
            <div className="balance_chart">
                <div className="chart_header">Total Expense by Month</div>
                <Line 
                    data={{
                        labels: props.monthExpenseTotals.monthLabels,
                        datasets: [
                    {
                        data: props.monthExpenseTotals.monthTotals,
                        borderColor: 'rgba(246,102,82)',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'rgba(246,102,82)',
                    }
                    ]
                    }}
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
                                    max: Math.round( (1.5 * Math.max.apply(null, props.monthExpenseTotals.monthTotals)) / 500) * 500,
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
                        elements: {
                            line: {
                                tension: 0
                            }
                        },
                        responsive: true,
                    }}
                />
            </div>
        </div>
    )
};

export default Chart;