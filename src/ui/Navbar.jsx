import React from 'react'

const Navbar = () => {
  return (
     <nav className='flex justify-between container text-[#0436b6] pt-6 '>
    <span className='font-bold text-xl'>PAYERTEL</span>
    <ul className='flex gap-6 '>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Service</a></li>
      <li><a href="">Contact</a></li>
    </ul>
      <div className='flex space-x-6 pb-4'>
      <a href="" className='border rounded-lg px-6 py-1 bg-blue-900 text-white'>Create Account</a> 
      <a href="" className='border rounded-lg  px-6 py-1 text-black border-sky-500 hover:bg-sky-400 duration-1000'>Login</a>
     </div>
    </nav>
  )
}

export default Navbar