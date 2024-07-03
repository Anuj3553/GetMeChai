"use client"
import React, { useState } from 'react'
import SearchResult from './SeachResult'

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [resultArr, setResultArr] = useState([])
    return (
        <div>
            <input type="text" name='search' id='search' className='shadow-xl shadow-slate-500 w-[75%] h-10 p-2 outline-none' placeholder='Search...' />
            <button className='p-2 text-white bg-orange-500 hover:cursor-pointer'>SEACRH</button>
        </div>
    )
}

export default SearchInput
