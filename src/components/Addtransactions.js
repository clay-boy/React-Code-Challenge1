import React, { useState } from "react";

function Addtransactions () = {
  const [date, setDate] = useState(""); 
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare transaction data
    const TransactionsData = {
      date,
      description,
      category,
      amount,
    };

    // Pass the data to the parent component
    onsubmit(TransactionsData);

    // Clear the input fields
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input form">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          placeholder="Description..."
          className="text-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Category..."
          className="text-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Amount..."
          className="text-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn">Add Transaction</button>
      </div>
    </form>
  );
};

export default Addtransactions;
