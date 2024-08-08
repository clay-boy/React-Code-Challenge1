import React, { useState } from "react";

const Addtransactions = ({ Addtransactions }) => {
  const [TransactionsData, setTransactionsData] = useState({
    categories: "",
    description: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    onsubmit({ TransactionsData });

    setCategories("");
    setDescription("");
    setAmount("");
  };

  return <div></div>;
};

export default Addtransactions;
