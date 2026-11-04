import React from 'react' 
import { assets } from '../assets/assets'
const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-2 py-1'>
      <img className='w-48 h-auto' src={assets.logo} alt=""/>
      <img src={assets.profile_image} alt="" />
    </div>
  )
}

export default NavBar
