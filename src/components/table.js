// import React, { Component } from "react";
// import ReactTableContainer from "react-table-container";
// import '../css/main.css';

// const data = require('../data/data.json');

// class trxTable extends Component {
//   renderTable() {
//     return data.trxs.transaction.map((trx, index) => {
//       const { postDate, baseType, category } = trx;
//       const { amount } = trx.amount;
//       return (
//         <tr id="transaction_row" key={index}>
//           <td>{postDate}</td>
//           <td>{baseType}</td>
//           <td>{category}</td>
//           <td>{'$' + amount.toFixed(2)}</td>
//         </tr>
//       )
//     })
//   }

//   renderTableHeader() {
//     let headers = ['Date', 'Type', 'Category', 'Amount'];
//     return headers.map((header, index) => {
//       return <th key={index}>{header}</th>
//     })
//   }

//   render() {
//     return(
//       <div>
//         <h1 id='title'>Transactions</h1>
//           <tr id="transaction_header">{this.renderTableHeader()}</tr>
//         <table id="transaction_table">
//           <tbody id="transaction_body">
//               {this.renderTable()}
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }
  
// export default trxTable;

import React from "react";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const data = require('../data/data.json');

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.trxs.transaction
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
                            {
                  Header: "Date",
                  accessor: "postDate"
                },
                {
                  Header: "Type",
                  accessor: "baseType"
                },
                {
                  Header: "Category",
                  accessor: "category"
                },
                {
                  Header: "Amount",
                  accessor: "amount.amount",
                  Cell: props => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value)
                }
          ]}
          defaultSorted={[
            {
              id: "postDate",
              desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Table;
