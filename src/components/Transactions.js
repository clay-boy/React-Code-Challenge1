import React, {useState} from 'react'

const Transactions = ({Transactions}) => {
    
    const [TransactionsData, setTransactionsData] = useState({
        categories : "",
        description : "",
        amount : "",

    })
    
     const handleSubmit =(e) => {
        e.preventDefault() // Prevent the default form submission

        onsubmit({TransactionsData});

        setCategories("");
        setDescription("");
        setAmount("");

     }

  return (
    <div>Transactions</div>
  )
}


export default Transactions;