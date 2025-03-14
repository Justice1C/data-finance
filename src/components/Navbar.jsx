import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav)
}


  return (
    <div className='flex justify-between item-center h-24 max-w-[1240px] mx-auto text-white px-4 mt-5'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='hidden md:flex'> 
        <li className='px-4 py-2'>Home</li>
        <li className='px-4 py-2'>Company</li>
        <li className='px-4 py-2'>Resource</li>
        <li className='px-4 py-2'>About</li>
        <li className='px-4 py-2'>Contact</li>
      </ul>
      <div onClick={handleNav} className=' block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      
      <div className={nav ?'fixed top-0 left-0 w-[60%] h-full border-r border-r-black bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
      <ul className='uppercase'> 
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resource</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>
      </ul>
      </div>
      </div>
 
    </div>
  )
}

export default Navbar