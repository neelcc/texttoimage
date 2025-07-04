import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router'
import  { motion } from 'framer-motion';


const Header = () => {
    const {user} = useContext(AppContext)
    const navigate = useNavigate();

    let handleGeneratebtn = ()=>{
        user ? navigate('/result') : alert("Pls Login Bro!")
    }

  return (
    <motion.div initial={{opacity : 0.2 , y:100}} transition={{duration:1 }} whileInView={{opacity:1,y:0}} viewport={{once:true}}  className='flex flex-col items-center justify-center text-center my-20 ' >
        <motion.div  initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{delay : 0.2 , duration:0.8}} className='inline-flex gap-2 text-stone-500 bg-white  rounded-full px-6 py-1 border border-neutral-500 ' >
            <p  >Best text to image generator</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay : 0.4 , duration:2}}  className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center ' >Turn text to<span className='text-blue-600' > image</span>, in seconds.</motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay : 0.6, duration:0.8}}  className='text-center max-w-xl mx-auto mt-5 text-gray-600   ' >Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</motion.p>
        
            <motion.button  initial={{opacity:0}} animate={{opacity:1}} transition={{delay : 1 , duration:1}} onClick={handleGeneratebtn} className=' flex items-center  sm:text-lg text-white bg-black rounded-full px-12 py-2.5  w-auto mt-8  ' >Generate Images
            <motion.img whileHover={{scale:1.05,duration:0.1}}  className='h-6' src={assets.star_group} alt="" />
            </motion.button>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay : 1 , duration:1}} className=' flex-wrap  flex justify-center mt-16  gap-2 '    >
                {
                    Array(6).fill('').map((item,index)=>(
                        <img className='rounded  hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 'src={ index%2==0 ? assets.sample_img_1 : assets.sample_img_2 } alt="" key={index} width={70} />
                    ))
                }
            </motion.div>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay : 1.1 , duration:1}}  className='mt-2 text-neutral-600 ' >Generated images from imagify</motion.p>
    </motion.div> 
  )
}

export default Header
