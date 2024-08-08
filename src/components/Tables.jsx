import React from "react";
import { useEffect, } from "react";
import { useState } from "react";


function Tables({ Transactions }) {
    
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((response) => response.json())
        .then((transactions) => setTransactions(transactions))

    }, []);
  //checks if transactions prop is null
  if (!transactions) {
    //if transactions is null return "No transactions found" message.
    return <div>NO TRANSACTION FOUND</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {/*iterates over the transactions array*/}
          {transactions.map((transaction, index) => (
            <tr key={transaction.id}>
              {/*display*/}
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
