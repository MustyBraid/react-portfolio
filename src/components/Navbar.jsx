import React from 'react'
import { Link } from "react-router-dom";

{/* Navbar */}
const NavBar = () => {
  return (
    
<nav class="fixed w-full h-[80px] flex items-center px-4 bg-green-300 text-gray-300 rounded-b-3xl ">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
      <div class="flex space-x-7">
        <div>
          <Link  to="/" class="flex items-center py-4 px-2">
            <span class="md:p-2 lg:px-4 font-semibold block text-green-50 text-5xl py-1 text-center"> Casey Chartier </span>
            </Link>
        </div>
        <div class="hidden md:flex items-center space-x-1">
          {/* <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Home </a>
          <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Contact Us </a> */}
          <Link to="/signup" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Sign-Up </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar