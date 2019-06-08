import React, { Component } from 'react';

const data = require('../data/data.json');

class Main extends Component {
    
    render() {
        let item = data.trxs.transaction[0]

        return (
            <h1>Hello, world!</h1>
        )
    }
}

export default Main;