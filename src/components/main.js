import React, { Component } from 'react';

const data = require('../data/data.json');

class Main extends Component {
    
    render() {
        let item = data.trxs.transaction[0]
        debugger
        return (
            <h1>bye</h1>
        )
    }
}

export default Main;