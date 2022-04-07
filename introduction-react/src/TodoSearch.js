import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setserchValue}) {
  
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setserchValue(event.target.value)
  }
  return (
    <input 
    className="TodoSearch" 
    placeholder="Cebolla" 
    value={searchValue}
    onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };