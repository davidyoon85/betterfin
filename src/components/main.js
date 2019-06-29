import React, { Component } from 'react';

import Nav from './nav';
import UserProfile from './user_profile';
import Chart from './chart';
import Pie from './pie';
import Table from './table';
import Footer from './footer';

const data = require('../data/data.json');

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            trxs: data.trxs.transaction,
            monthExpenseTotals: {}
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const janCategories = {};
        const febCategories = {};
        const marCategories = {};

        let janTotal = 0;
        let febTotal = 0;
        let marTotal = 0;

        this.state.trxs.forEach((ele) => {
            if (ele.baseType === 'DEBIT') {
                if (ele.postDate.includes('2019-01')) {
                    janTotal += ele.amount.amount;
                    if (janCategories[ele.category] === undefined) {
                        janCategories[ele.category] = 0
                    }
                    janCategories[ele.category] += ele.amount.amount;
                } else if (ele.postDate.includes('2019-02')) {
                    febTotal += ele.amount.amount;
                    if (febCategories[ele.category] === undefined) {
                        febCategories[ele.category] = 0
                    }
                    febCategories[ele.category] += ele.amount.amount;
                } else if (ele.postDate.includes('2019-03')) {
                    marTotal += ele.amount.amount;
                    if (marCategories[ele.category] === undefined) {
                        marCategories[ele.category] = 0
                    }
                    marCategories[ele.category] += ele.amount.amount;
                } 
            }
        })

        const monthLabels = ['Jan', 'Feb', 'Mar']
        const monthTotals = [janTotal, febTotal, marTotal]

        const janCategoriesTotals = [];
        const febCategoriesTotals = [];
        const marCategoriesTotals = [];

        for (let i = 0; i < Object.keys(janCategories).length; i++) {
            janCategoriesTotals.push(Object.keys(janCategories)[i]);
        }

        for (let i = 0; i < Object.keys(febCategories).length; i++) {
            febCategoriesTotals.push(Object.keys(febCategories)[i]);
        }

        for (let i = 0; i < Object.keys(marCategories).length; i++) {
            marCategoriesTotals.push(Object.keys(marCategories)[i]);
        }

        const janExpenseTotals = [];
        const febExpenseTotals = [];
        const marExpenseTotals = [];

        for (let i = 0; i < Object.values(janCategories).length; i++) {
            janExpenseTotals.push(Object.values(janCategories)[i]);
        }

        for (let i = 0; i < Object.values(febCategories).length; i++) {
            febExpenseTotals.push(Object.values(febCategories)[i]);
        }

        for (let i = 0; i < Object.values(marCategories).length; i++) {
            marExpenseTotals.push(Object.values(marCategories)[i]);
        }

        const monthlyExpenseTotals = {monthLabels, monthTotals, janCategoriesTotals, janExpenseTotals, febCategoriesTotals, febExpenseTotals, marCategoriesTotals, marExpenseTotals}
        
        this.setState({ monthExpenseTotals: monthlyExpenseTotals })
    }

    render() {
        const userName = this.state.data.accounts.account[0].displayedName;
        const transactions = this.state.data.trxs.transaction;
        const monthExpenseTotals = this.state.monthExpenseTotals;
        const userInfo = this.state.data.accounts.account[0]

        return (
            <div>
                <div>
                    <Nav userName={userName}/>
                </div>
                <div className="pageContent">
                    <div className="profile_container">
                        <UserProfile userInfo={userInfo}/>
                    </div>

                    <div className="chart_container">
                        <Chart monthExpenseTotals={monthExpenseTotals}/>
                        <Pie monthExpenseTotals={monthExpenseTotals}/>
                    </div>

                    <div className="table_container">
                        <Table transactions={transactions}/>
                    </div>
                    
                    <div className="footer_container">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;