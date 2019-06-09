import React, { Component } from 'react';

import UserProfile from './user_profile';
import Graph from './graph';
import Table from './table';

class Main extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div>
                    <UserProfile />
                </div>

                <div>
                    <Graph />
                </div>

                <div>
                    <Table />
                </div>
            </div>
        )
    }
}

export default Main;