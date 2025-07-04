import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col mb-10 items-center justify-center ' >
      <div className='flex flex-col items-center mb-8 justify-center text-center ' >
        <h2 className='text-3xl font-medium sm:text-4xl' >Customer testimonials</h2>
        <p className='text-gray-500' >What Our Users Are Saying</p>
      </div>
      <div className='flex flex-col  items-center justify-center mb-5  md:flex-row  ' >
        {
            testimonialsData.map((item,index)=>(
                <div key={index}  className='flex flex-col text-center rounded-lg items-center justify-center bg-white mx-2 px-6 py-5 shadow-md my-5 hover:scale-[1.02] transition-all duration-300 ' >
                    <img className='w-14 rounded-full ' src={item.image} alt="" />
                    <h2 className=' font-medium text-lg ' >{item.name}</h2>
                    <p className='text-2xs text-gray-800  ' >{item.role}</p>
                    <div className='flex mb-4 mt-3' >
                        {
                            Array(item.stars).fill().map((item,index)=>(
                                <img key={index} src={assets.rating_star} alt="" />
                            ))
                        }
                    </div>
                    <p  className=' text-gray-400 max-w-60 text-center  ' > {item.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Testimonials
