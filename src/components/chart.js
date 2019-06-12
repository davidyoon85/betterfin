import React, { Component } from 'react';
import * as d3 from 'd3';

const data = require('../data/data.json');

class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: data
        }

        this.createBalanceChart = this.createBalanceChart.bind(this);
    }

    componentDidMount() {


        // var data1 = [
        //     {ser1: 0.3, ser2: 4},
        //     {ser1: 2, ser2: 16},
        //     {ser1: 3, ser2: 8}
        //  ];
        this.createBalanceChart() 
    }

    createBalanceChart() {
        const months = this.state.data.balances[0].month_labels;
        const month_averages = this.state.data.balances[0].month_average_values;
        const data = [];

        for (let i = 0; i < months.length; i++) {
            data.push({month: months[i], average: month_averages[i]}) 
        }

        
    }

    render() {
        return (
            <div className="chart_section">
        {/* <button onclick="update(data1)">Dataset 1</button>
<button onclick="update(data2)">Dataset 2</button> */}
                <div className="balance_chart">
                </div>
                <div className="expense_chart">
                    
                </div>
            </div>
        )
    }
}

export default Chart;

// // Create a function that takes a dataset as input and update the plot:
// function update(data) {
  
//     // Create a update selection: bind to the new data
//     var u = svg.selectAll(".lineTest")
//       .data([data], function(d){ return d.ser1 });
  
//     // Updata the line
//     u
//       .enter()
//       .append("path")
//       .attr("class","lineTest")
//       .merge(u)
//       .transition()
//       .duration(3000)
//       .attr("d", d3.line()
//         .x(function(d) { return x(d.ser1); })
//         .y(function(d) { return y(d.ser2); }))
//         .attr("fill", "none")
//         .attr("stroke", "steelblue")
//         .attr("stroke-width", 2.5)
  
//   }