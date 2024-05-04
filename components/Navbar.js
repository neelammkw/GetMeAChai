"use client"
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from 'next/image'
const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="text-white flex bg-black justify-between px-4 md:h-16 items-center flex-col md:flex-row ">
      <Link
        href={"/"}
        className="flex p-3 justify-center gap-2 items-center text-2xl"
      >
        Get Me a Chai!
        <span className="-mt-5">
          <Image src="./chai1.gif" width={30} alt="chai" />
        </span>
      </Link>

      <div className="flex h-12  relative md:flex-row ">
        {session && (
          <>
            <button
              id="dropdownDefaultButton"
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => {
                setTimeout(() => {
                  setShowDropdown(false);
                }, 100);
              }}
              className=" mx-4  px-5 py-2.5 text-center inline-flex items-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2 "
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

            <div
              id="dropdown"
              className={`z-10 ${
                showDropdown ? "" : "hidden"
              } absolute left-[115px] bg-white mt-12 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                       

                </li>
                <li>
                  <Link
                    href={`/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your page
                  </Link>
                </li>

                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}

        {session && (
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
        {!session && (
          <Link href={"/login"}>
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
