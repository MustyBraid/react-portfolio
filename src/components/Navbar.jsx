import React from 'react'
import { Link } from "react-router-dom";

{/* Navbar */}
const NavBar = () => {
  return (
    
<nav className="fixed w-full h-[80px] flex items-center px-4 bg-green-300 text-gray-300 rounded-b-3xl ">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">
      <div className="flex space-x-7">
      <div className="hidden md:flex items-center space-x-1">
          {/* <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Home </a>
          <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Contact Us </a> */}
          <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> About Me </Link>
          <Link to="/portfolio" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Portfolio </Link>
        </div>
        <div>
          <Link  to="/" className="flex items-center py-4 px-2">
            <span className="md:p-2 lg:px-4 font-semibold block text-green-50 text-5xl py-1 text-center"> Casey Chartier </span>
            </Link>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          {/* <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Home </a>
          <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Contact Us </a> */}
          <Link to="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Contact </Link>
          <Link to="/resume" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Resume </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar