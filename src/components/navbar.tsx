import React from 'react';
import Link from 'next/link';
import { NavigationMenuDemo } from './navlinks';
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <div>
      <div className="navbar text-white bg-myBlackOne"> {/* Keep this solid background */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:hidden hover:text-myOrange">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-[#ececec] rounded-box text-myBlackOne z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/">Home</Link></li>
              <li>
                <details>
                  <summary>Womens</summary>
                  <ul className="p-2 text-myBlackOne">
                    <li><Link href="/tops">Shirts/Top</Link></li>
                    <li><Link href="/jeans">Jeans/Pants</Link></li>
                    <li><Link href="/jewlery">Jewelry/Accessories</Link></li>
                    <li><Link href="/makeup">Makeups/Beauty Products</Link></li>
                    <li><Link href="/shoes">Shoes</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Mens</summary>
                  <ul className="p-2 text-myBlackOne">
                    <li><Link href="/shirts">Shirts/T-shirts</Link></li>
                    <li><Link href="/pants">Jeans/Pants</Link></li>
                    <li><Link href="/accessories">Accessories</Link></li>
                    <li><Link href="/shoes">Shoes</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">E-COMMERCE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="pr-6 pt-1 cursor-pointer group">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 group-hover:text-myOrange duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item group-hover:text-myOrange duration-300">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow text-myBlackThree">
              <div className="card-body text-myBlackThree">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
