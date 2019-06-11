import React, { Component } from 'react';

const trxData = require('../data/data.json');

class UserProfile extends Component {
    render() {
        const account = Object.values(trxData.accounts.account)[0];
        const { displayedName, accountName, accountNumber } = account;
        const acctBalance = account.currentBalance.amount;
        return (
            <div className="profile_main">
                <span><strong>Name: </strong>{displayedName}</span>
                <span><strong>Bank: </strong>{accountName}</span>
                <span><strong>Account Number: </strong>{accountNumber}</span>
                <span><strong>Account Balance: </strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(acctBalance)}</span>
            </div>
        )
    }
}

export default UserProfile;