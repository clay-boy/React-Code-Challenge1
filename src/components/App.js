import { useEffect, useState } from "react";
import "../App.css";
import AddTransactions from "./AddTransactions";
import Tables from "./Tables";
import Filter from "./Filter";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetch("https://deployment-pink-kappa.vercel.app/transactions")
      .then((response) => response.json())
      .then((transactions) => {
        setTransactions(transactions);
        setFilteredTransactions(transactions); // Set the initial filtered transactions
      })
      .catch((error) => console.log(error));
  }, []);

  // Handle adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);

fetch("https://deployment-pink-kappa.vercel.app/transactions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newTransaction),
})
  .then((response) => response.json())
  .then((addedTransaction) => {
    setTransactions([...transactions, addedTransaction]);
    setFilteredTransactions([...transactions, addedTransaction]); // Update filtered transactions
  })
  .catch((error) => console.log(error));
  };

  // Handle filtering of transactions
  const handleFilter = (filterText) => {
    setFilterText(filterText);
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <h1 className="title">Bank-Transactions</h1>
      <hr />

  <Filter onFilter={handleFilter} />
  <AddTransactions onsubmit={handleAddTransaction} />
  <Tables transactions={filteredTransactions} />
</div>
  );
}

export default App;