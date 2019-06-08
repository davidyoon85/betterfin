import React, { Component } from 'react';

const trxData = require('../data/data.json');

class UserProfile extends Component {
    render() {
        const account = Object.values(trxData.accounts.account)[0];
        const userName = account.displayedName;
        const bankName = account.accountName;
        const acctBalance = account.currentBalance.amount;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>Name: {userName}</span>
                <span>Bank:{bankName}</span>
                <span>Account Balance: {acctBalance}</span>
            </div>
        )
    }
}

export default UserProfile;