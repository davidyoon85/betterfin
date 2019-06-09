import React from "react";
import ReactTableContainer from "react-table-container";

const trxTable = () => (
    <ReactTableContainer width="auto" height="500px">
      <table>
        <colgroup>
            <col span="1" className="" />
            ...
        </colgroup>
        <thead>
          <tr>
            <th>Header cell</th>
            ...
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body cell</td>
            ...
          </tr>
          <tr>
            <td>Body cell</td>
            ...
          </tr>
          ...
        </tbody>
      </table>
    </ReactTableContainer>
  );
   
  export default trxTable;