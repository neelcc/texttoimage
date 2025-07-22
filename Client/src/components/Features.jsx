import React from 'react'
import { featuresData } from '../assets/assets'
import { useNavigate } from 'react-router'


const Features = () => {
  const navigate = useNavigate();
  return (
    <div  className='flex flex-col items-center justify-center my-30 ' >
    <h1 className='  text-3xl sm:text-4xl font-semibold mb-2 ' >Extra Features</h1>
    <p className=' text-gray-600 mb-8 text-lg ' >Enhance your image generation experience with these powerful tools.</p>
    <div className=' space-y-4 w-full max-w-3xl text-sm  ' >
      {
          featuresData.map((feature,index)=>(
              <div onClick={()=>{navigate(`features${feature.id}`)}}  key={index} className='flex gap-4 mb-4 p-5 px-8  rounded-lg items-center bg-white/20 border border-neutral-300 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-md ' >
                  <img src={feature.icon} alt="" width={45}    />
                 <div> <h2 className=' text-xl font-medium ' >{feature.title}</h2>
                  <p className='text-gray-500' >{feature.description}</p>
                  </div>
              </div>
          ))  
      }
      </div>
      </div>
  )
}

export default Features
