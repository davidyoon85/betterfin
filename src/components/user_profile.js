import React, { Component } from 'react';

const trxData = require('../data/data.json');

class UserProfile extends Component {
    formatUserName(name) {
        name = name.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        
        return name
    }

    render() {
        const account = Object.values(trxData.accounts.account)[0];
        const { accountName, accountNumber } = account;
        const userName = this.formatUserName(trxData.accounts.account[0].displayedName.split(' ')[0]);

        return (
            <div className="profile_main">
                <h1>Welcome, {userName}!</h1>
                <h2>This is your dashboard for <strong>{accountName} {accountNumber}</strong></h2>
            </div>
        )
    }
}

export default UserProfile;