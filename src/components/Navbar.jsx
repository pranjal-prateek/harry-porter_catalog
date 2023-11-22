/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'
import {styles} from '../styles.js'
import { useState } from 'react'
import { logo, } from '../assets'
const Navbar = () => {
  const [active,setActive]=useState('')
  const [toggle,setToggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
        to="/" 
        className='flex items-center gap-2'
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt='LOGO' className='w-16 h-16 object-contain'/>
          <p className=' text-white text-[18px] font-bold cursor-pointer flex'>
          Harry Potter &nbsp;
            <span className=' sm:block hidden'>| Originals </span>
          </p>
        </Link>
       
         
      </div>
    </nav>
  )
}

export default Navbar