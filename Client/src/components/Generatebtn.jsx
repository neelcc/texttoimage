import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router';
import { AppContext } from '../context/AppContext';

const Generatebtn = () => {
  const {user} = useContext(AppContext)
  const navigate = useNavigate();

  let handleGeneratebtn = ()=>{
      user ? navigate('/result') : alert("Pls Login Bro!")
  }
  return (
    <div className='flex flex-col items-center justify-center  ' >
      <h2 className='text-3xl md:text-3xl text-neutral-800 py-6 md:py-12 sm:text-4xl text-center font-semibold ' >See the magic. Try now</h2>
      <button  onClick={handleGeneratebtn} className=' flex items-center  sm:text-lg text-white bg-black rounded-full px-12 py-2.5  w-auto m-auto mb-5 hover:scale-105 transition-all duration-500  ' >Generate Images
            <img  className='h-6' src={assets.star_group} alt="" />
            </button>
    </div>
  )
}

export default Generatebtn
