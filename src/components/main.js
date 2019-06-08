import React, { Component } from 'react';

import UserProfile from './user_profile';
import Graph from './graph';

class Main extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <UserProfile />
                
                <div style={{ height: '400px' }}>
                    <Graph />
                </div>
            </div>
        )
    }
}

export default Main;