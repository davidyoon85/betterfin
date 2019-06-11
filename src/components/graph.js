import React, { Component } from 'react';
import * as d3 from 'd3';

const data = require('../data/data.json');

class Graph extends Component {
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
            <svg id="svg" width="600" height="0"></svg>
        )
    }
}

export default Graph;