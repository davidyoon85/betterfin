import React from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";
import '../css/main.css';

const Table = (props) => {
  let data = props.transactions;

  return (
    <div>
      <div className="table_header">Transaction List</div>
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

export default Table;
