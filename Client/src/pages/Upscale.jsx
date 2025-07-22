import React from 'react'
import { assets } from '../assets/assets'

const Upscale = () => {
  return (
    <div className='flex items-center justify-center m-auto h-[80vh] w-full'>
  <div className='flex px-6 md:px-20 pt-10 flex-col m-auto items-center justify-center bg-white h-[70vh] w-[90%] rounded-lg shadow-md'>
    <div className='flex flex-col justify-center items-center border-dashed border-2 border-violet-300 py-10 md:px-20 lg:px-20  rounded-lg text-center cursor-pointer'>
      <img width={100} src={assets.upload} alt="upload" />
      <h1 className='font-semibold text-4xl'>
        Drag and Drop <span className='text-violet-700'>images</span>
      </h1>
      <p className='text-lg'>
        or <span className='underline text-violet-700'>browse files</span> from your computer.
      </p>
    </div>
    <button className='sm:text-lg text-white bg-black rounded-full px-12 py-2.5 mt-6 w-auto m-auto mb-5 hover:scale-105 transition-all duration-500'>
      Upload
    </button>
  </div>
</div>

  )
}

export default Upscale
