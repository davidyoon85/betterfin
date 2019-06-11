import React, { Component } from 'react';
import * as d3 from 'd3';

const data = require('../data/data.json');

class Chart extends Component {
    constructor(props) {
        super(props)

        this.createGraph = this.createGraph.bind(this);
    }

    componentDidMount() {
      this.createGraph();
    }

    createGraph() {

    }

    render() {
        return (
            <div className="chart_section">
                <div className="balance_chart">

                </div>
                <div className="expense_chart">
                    
                </div>
            </div>
        )
    }
}

export default Chart;