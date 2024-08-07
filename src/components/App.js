import { useEffect, useState } from "react";
import "../App.css";
function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((transactions) => setTransactions(transactions))
      // .console((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1 className="title">Bank-Transactions</h1>
      <hr />
    </div>
  );
}
export default App;
