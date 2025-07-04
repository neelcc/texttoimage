import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Result = () => {
  const {generateImage} = useContext(AppContext)
  const [image,setImage] = useState(assets.sample_img_1)
  const [isImageLoaded , setIsImageLoaded] = useState(false)  
  const [loading , setLoading] = useState(false)
  const [input , setInput ] = useState('')
  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    setLoading(true)
    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmitHandler}  className=' flex flex-col min-h-[90vh] justify-center items-center py-4 ' action="">
      <div>
      <div className=' relative ' >
        <img className=' max-w-sm rounded w-60 md:w-80 lg:w-85 ' src={image} alt="" />
        <span className= {` absolute bottom-0 left-0  bg-blue-500 h-1 ${ loading ?'w-full transition-all duration-[10s]' : 'w-0'} `} ></span> 
      </div>
        <p className={!loading ? 'hidden' : '' }  >Loading....</p>
        </div  >
       { !isImageLoaded  && <div className=' flex  w-full max-w-2xl  text-white bg-neutral-500 rounded-full text-sm p-0.5 mt-10  ' >
          <input onChange={ e => setInput(e.target.value)} value={input}  className=' text-xs  flex-1 bg-transparent outline-none ml-6 max-sm:w-20 placeholder-color   ' type="text" placeholder='Describe what you want to generate'  />
          <button type='submit' className=' bg-zinc-900 lg:px-10 md:px-10 py-2 sm:py-3 md:py-3 lg:py-3 rounded-full sm:px-16 px-2 text-white ' > Generate</button>     
        </div>}

     { isImageLoaded && <div className='flex gap-2 flex-wrap items-center justify-center text-sm p-0.5 mt-10 rounded-full  ' >
        <p onClick={()=>{setIsImageLoaded(false)}} className=' bg-transparent border border-zinc-900 text-black px-6 py-3 rounded-full cursor-pointer ' >Generate Another</p>
        <a download className=' bg-transparent border bg-zinc-900 text-white px-8 py-3 rounded-full cursor-pointer ' href={image}  >Download</a>
      </div>}


    </form>
   )
}

export default Result
