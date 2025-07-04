import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between py-5 mt-20' >
      <div className='flex items-center justify-center gap-6 ' >
        <img className='w-30 border-r border-neutral-500 px-5 ' src={assets.logo} alt="" /> 
        <p className='text-md md:displa text-gray-600 max-sm:hidden '>All right reserved. Copyright @imagify</p>
      </div>
      <div className='flex items-center ml-4 gap-3 ' >
            <img className='w-7  ' src={assets.facebook_icon} alt="" />
            <img className='w-7  ' src={assets.instagram_icon} alt="" />
            <img className='w-7  ' src={assets.twitter_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
