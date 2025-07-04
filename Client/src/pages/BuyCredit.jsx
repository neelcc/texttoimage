import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import  { motion } from 'framer-motion';

const BuyCredit = () => {
  const {user} = useContext(AppContext)
  return (
    <motion.div initial={{opacity : 0.2 , y:100}} transition={{duration:1 }} whileInView={{opacity:1,y:0}} viewport={{once:true}}   className='min-h-[90vh] flex flex-col items-center justify-center  ' >
      <p className=' text-md font-medium bg-[#ececec] mt-10 text-[#515151] px-8 border border-neutral-600 py-2 mb-10 rounded-full  ' >OUR PLANS</p>
      <h2 className=' text-4xl mb-6 sm:mb-10 font-medium  ' >Choose the plan</h2>
      <div className=' flex flex-wrap justify-center gap-6 text-left ' >
        {
          plans.map((item,index)=>(
            <motion.div whileHover={{scale:1.05,duration:0.1}}  key={index} className=' justify-start bg-white  py-12 rounded-md border border-neutral-300 hover:scale-[1.02] transition-all duration-300 shadow-md px-8   ' >
              <img  className='w-7' src={assets.logo_icon} alt="" />
              <p className=' text-md font-medium text-gray-600 mt-3 ' >{item.id}</p>
              <p className=' text-sm mb-5 ' >{item.desc}</p>
           <span className=' flex items-center gap-2  ' > <h1 className=' text-3xl font-medium text-gray-600' >  ${item.price}</h1> <p className=' text-sm text-gray-550 ' >/ {item.credits} credits </p> </span>
                <button className=' w-full bg-gray-800 text-white text-sm rounded-md py-2.5 mt-8 min-w-52 '>  { user ?  "Purchase" : "Get Started"  }  </button>
              
            </motion.div>
          ))
        }

      </div>
    </motion.div>
  )
}

export default BuyCredit