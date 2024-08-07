import React, {useState} from 'react'

const Transactions = ({Transactions}) => {

    const [TransactionsData, setTransactionsData] = useState({
        categories : "",
        description : "",
        amount : "",

    })


  return (
    <div>Transactions</div>
  )
}


export default Transactions;