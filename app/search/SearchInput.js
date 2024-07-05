"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import debounce from 'lodash.debounce';
import SearchResult from './SeachResult';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [resultArr, setResultArr] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const wrapperRef = useRef(null);

    const handleSearch = debounce(async (term) => {
        if (term) {
            let response = await SearchResult(term);
            setResultArr(response);
            setShowResults(true);
        } else {
            setResultArr([]);
            setShowResults(false);
        }
    }, 300);

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowResults(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className='flex flex-col justify-center relative' ref={wrapperRef}>
            <div className='text-center flex m-5'>
                <input
                    type="text"
                    name='search'
                    id='search'
                    className='shadow-xl text-black w-[75%] h-10 p-2 outline-none'
                    placeholder='Search...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className='p-2 bg-white hover:cursor-pointer text-black'
                    onClick={() => handleSearch(searchTerm)}
                >
                    SEARCH
                </button>
            </div>
            {showResults && resultArr.length > 0 && (
                <div className="absolute top-full w-full bg-gray-900 rounded-xl border border-white shadow-lg max-h-60 overflow-y-auto z-10">
                    {resultArr.map((element) => (
                        <ul key={element._id} className='flex justify-center'>
                            <Link href={`/${element.username}`} >
                                <li className="flex my-5 mx-2 items-center gap-4">
                                    <img className="border border-white p-[1.8px] w-10 h-10 rounded-full" src={element.profilepic} alt="" />
                                    <div className="font-medium dark:text-white">
                                        <div>{element.name}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{element.username}</div>
                                    </div>
                                </li>

                                <div className="bg-white h-1 opacity-10"></div>
                            </Link>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchInput;
