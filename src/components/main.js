import React, { Component } from 'react';

import Nav from './nav';
import UserProfile from './user_profile';
import Chart from './chart';
import Pie from './pie';
import Table from './table';

const data = require('../data/data.json');

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

        this.state.trxs.forEach((ele) => {
            if (ele.baseType === 'DEBIT') {
                if (ele.postDate.includes('2019-01')) {
                    // this.state.janTotal += ele.amount.amount;
                    if (janCategories[ele.category] === undefined) {
                        janCategories[ele.category] = 0
                    }
                    janCategories[ele.category] += ele.amount.amount;
                    // this.setState({ janExpenses: ele });
                } else if (ele.postDate.includes('2019-02')) {
                    // this.state.febTotal += ele.amount.amount;
                    if (febCategories[ele.category] === undefined) {
                        febCategories[ele.category] = 0
                    }
                    febCategories[ele.category] += ele.amount.amount;
                    // this.setState({ febExpenses: ele });
                } else if (ele.postDate.includes('2019-03')) {
                    // this.state.marTotal += ele.amount.amount;
                    if (marCategories[ele.category] === undefined) {
                        marCategories[ele.category] = 0
                    }
                    marCategories[ele.category] += ele.amount.amount;
                    // this.setState({ marExpenses: ele });
                } 
            }
        })

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

        const monthlyExpenseTotals = {janCategoriesTotals, janExpenseTotals, febCategoriesTotals, febExpenseTotals, marCategoriesTotals, marExpenseTotals}
        
        this.setState({ monthExpenseTotals: monthlyExpenseTotals })
    }

    render() {
        const { monthExpenseTotals } = this.state;
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
                        <Pie monthExpenseTotals={monthExpenseTotals}/>
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