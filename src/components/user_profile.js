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
        const { displayedName, accountName, accountNumber } = account;
        const acctBalance = account.currentBalance.amount;
        const userName = this.formatUserName(trxData.accounts.account[0].displayedName.split(' ')[0]);

        return (
            <div className="profile_main">
                <h1>Welcome, {userName}!</h1>
                <h2>This is your dashboard for <strong>{accountName} {accountNumber}</strong></h2>
                {/* <span><strong>Bank: </strong>{accountName}</span>
                <span><strong>Account Number: </strong>{accountNumber}</span>
                <span><strong>Account Balance: </strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(acctBalance)}</span> */}
            </div>
        )
    }
}

export default UserProfile;