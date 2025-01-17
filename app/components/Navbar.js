"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import SearchInput from '../search/SearchInput';
import SearchResult from '../search/SeachResult';

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const handleLinkClick = (callback) => {
    setShowDropdown(false);
    if (callback) {
      callback();
    }
  };

  return (
    <nav className="bg-gray-900 shadow-white text-white flex justify-between items-center px-4 py-4 md:h-16 flex-col md:flex-row">
      <Link href="/">
        <div className="logo font-bold text-3xl flex justify-center items-center">
          <img src="/tea.gif" width={60} className="bg-blend-luminosity mb-[12px] md:" alt="logo" />
          <span>GetMeCha!</span>
        </div>
      </Link>

      <div className='right md:flex justify-center items-center'>
        <div className="relative flex justify-center top-[5px]">
          {session && (
            <>
              <button
                onClick={handleDropdownClick}
                onBlur={handleDropdownBlur}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Welcome {session.user.email}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className={`z-10 ${showDropdown ? '' : 'hidden'} absolute md:top-[46px] top-[65px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link href="/"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleLinkClick()}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleLinkClick()}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleLinkClick()}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleLinkClick()}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleLinkClick(signOut)}
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {!session && (
            <Link href="/login">
              <button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:px-5 px-32 py-2.5 text-center me-2 mb-2">
                Login
              </button>
            </Link>
          )}
        </div>
        <SearchInput SearchResult={SearchResult} />
      </div>
    </nav>
  );
};

export default Navbar;
