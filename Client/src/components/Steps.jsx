import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div  className='flex flex-col items-center justify-center my-30 ' >
      <h1 className='  text-3xl sm:text-4xl font-semibold mb-2 ' >How it works</h1>
      <p className=' text-gray-600 mb-8 text-lg ' >Transform Words Into Stunning Images</p>
      <div className=' space-y-4 w-full max-w-3xl text-sm  ' >
        {
            stepsData.map((step,index)=>(
                <div key={index} className='flex gap-4 mb-4 p-5 px-8  rounded-lg items-center bg-white/20 border border-neutral-300 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-md ' >
                    <img src={step.icon} alt="" width={45}    />
                   <div> <h2 className=' text-xl font-medium ' >{step.title}</h2>
                    <p className='text-gray-500' >{step.description}</p>
                    </div>
                </div>
            ))  
        }
      </div>
    </div>
  )
}

export default Steps
