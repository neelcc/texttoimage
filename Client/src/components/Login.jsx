import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'
import  { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
  const [state,setState] = useState('Login') // toggling sign up / login
  const { showLogin, setShowLogin , backendUrl , setToken, setUser } = useContext(AppContext)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  console.log(backendUrl);
  console.log(showLogin);
  

  
  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    try{
      if(state === 'Login'){
        const { data } =  await axios.post(backendUrl+'/api/user/login',{
          email,
          password
        })
        console.log(data);
        if(data.sucess){
          setToken(data.token)
          setUser(data.user)
          console.log(data.token);
          localStorage.setItem('token' , data.token)
          setShowLogin(false)
        }else{  
          toast.error(data.message)
        }
      }
      else{
        const { data } =  await axios.post(backendUrl + '/api/user/register',{
          name,
          email,
          password
        })

        if(data.sucess){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token' , data.token)
          setShowLogin(false)
        }else{
          toast.error(data.message)
        }
      }
    }catch(e)
    {
      toast.error(e.message)
    }
    
  }
  
  
  
  useEffect(()=>{
    document.body.style.overflow  = 'hidden'
    return ()=>{
      document.body.style.overflow  = 'unset'
    }
  },[])
  
  
  return (
    <div className='  absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center  ' >
      <motion.form onSubmit={onSubmitHandler} initial={{opacity:0.2, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.3}} viewport={{ once:true }} className=' relative bg-white p-10 rounded-xl text-slate-500  ' >
        <h1 className=' text-center text-2xl text-neutral-700 font-medium ' >{state}</h1>
        <p className='text-sm text-center ' >Welcome back!  Please sign in to continue
        </p>
        { state !=='Login' && <div className='  border px-4 py-2 flex items-center gap-2 rounded-full mt-5 ' >
            <img width={30} className='  ' src={assets.profile_icon} alt="" />
            <input onChange={(e)=>{setName(e.target.value)}} value={name}  className=' outline-none ' type="text" placeholder='Full Name' required />
        </div> }
        <div className='  border px-6 py-2 flex items-center gap-2 rounded-full mt-4 ' >
            <img  className='  ' src={assets.email_icon} alt="" />
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className=' outline-none ' type="email" placeholder='Email' required />
        </div>
        <div className='  border px-6 py-2 flex items-center gap-2 rounded-full mt-4' >
            <img   src={assets.lock_icon} alt="" />
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className='outline-none' type="password" placeholder='Password' required />
        </div>
        <p className=' text-sm text-blue-600 my-4 font-medium cursor-pointer ' >Forgot password?</p>
        <button className='bg-blue-600 text-gray-200  py-3 rounded-3xl w-full '> { state === 'Login' ? 'Login' : "Create Account" }  </button>
      { state==='Sign Up' ?  <p className='text-sm text-gray-400 text-center mt-3 ' >Already have an account?<span className=' text-blue-600 cursor-pointer ' onClick={() => {setState('Login')}} > Login</span> </p> :
        <p className='text-sm text-gray-400 text-center mt-3 ' >Dont't have an account? <span className=' text-blue-600 cursor-pointer ' onClick={() => {setState('Sign Up')}} > Sign Up</span> </p>}

      <img onClick={ ()=>{setShowLogin(false)} } className=' absolute top-5 right-5 cursor-pointer ' src={assets.cross_icon} alt="" />

      </motion.form>
    </div>
  )
}

export default Login
