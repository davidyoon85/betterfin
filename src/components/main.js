import React, { Component } from 'react';

import Nav from './nav';
import UserProfile from './user_profile';
import Chart from './chart';
import Table from './table';

const data = require('../data/data.json');

class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Nav />
                </div>
                <div className="pageContent">
                    <div className="profile_container">
                        <UserProfile />
                    </div>

                    <div className="chart_container">
                        <Chart />
                    </div>

                    <div className="table_container">
                        <Table />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;