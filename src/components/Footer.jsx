import React from 'react'



const Footer = () => {
  return (
<footer className="flex-row justify-center p-4 rounded-lg shadow-black shadow-2xl  bg-white rounded-tr-sm">

<div className='flex justify-center items-center'>
    <div className='flex space-x-52'>
    <a href="https://stackoverflow.com/users/19118176/mustybraid" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Stack Overflow </a>
    <a href="https://www.linkedin.com/in/casey-313b/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> LinkedIn </a>
    <a href="https://github.com/MustyBraid" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"> Github </a>
    </div>
</div>
</footer>
  )
}

export default Footer