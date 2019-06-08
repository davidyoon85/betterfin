import React, { Component } from 'react';
import * as d3 from 'd3';

const trxData = require('../data/data.json');

class Graph extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

        this.fetchData = this.fetchData.bind(this);
        this.createBarChart = this.createBarChart.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        
        window.addEventListener('resize', this.createBarChart)

     }

     fetchData() {
        const acctData = Object.values(trxData.balances);
        const months = acctData[0].month_labels;
        const month_averages = acctData[0].month_average_values
        const dataHash = []

        for (let i = 0; i < months.length; i++) {
            dataHash.push({[months[i]]: month_averages[i]});
        }
        this.setState({data: dataHash}, (() => this.createBarChart))
     }

   createBarChart() {
       debugger
   }

    componentDidUpdate() {
    this.createBarChart()
    }

    componentWillMount() {
        window.removeEventListener('resize', this.createBarChart)
    }
   

    render() {

        return ( 
            <svg ref={node => 
                this.node = node
            }
            width={'100%'} height={'100%'}>
            </svg>
        )}
}

export default Graph;

