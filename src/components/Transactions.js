import React, {useState} from 'react'

const Transactions = ({Transactions}) => {
    
    const [TransactionsData, setTransactionsData] = useState({
        categories : "",
        description : "",
        amount : "",

    })

      // Handle form submition
     const handleSubmit =(e) => {
        e.preventDefault() // Prevent the default form submission

        onsubmit({transactionsData});

        setCategories("");
        setDescription("");
        setAmount("");

     }

  return (
    <div>Transactions</div>
  )
}


export default Transactions;