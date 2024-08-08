import React from "react";
//functional component that accepts a prop when called onFilter
const Filter = ({onFilter})=>{
    const handleFilterChange = (e) =>{

        onFilter(e.target.value);//current value of the input field
    }
    //return JSX element
    return (
        <input type="text" 
        placeholder="Search Transactions"
         onChange={handleFilterChange} 
         required />
    );
};
export default Filter;