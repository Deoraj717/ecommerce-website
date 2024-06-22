import React from 'react'
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';      

function Search() {

  const [searchItem,setSearchItem] = useState("");

  const handleInput = async (event) =>{
      setSearchItem(event.target.value);
  }

  return (
    <div className='search-bar'>
        <input type = "text" placeholder='Search Products . . . ' className='search-input' value = {searchItem} onChange={handleInput}/>
        <button><FaSearch id = "search-icon"/></button>
    </div>
  )
}

export default Search