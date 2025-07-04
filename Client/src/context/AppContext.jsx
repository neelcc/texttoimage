import { useEffect, useState } from "react";
import { createContext } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showLogin , setShowLogin] =  useState(false)
  const [token , setToken] = useState(localStorage.getItem('token'))
  const [credit , setCredit] = useState(0)
  
  const backendUrl =  import.meta.env.VITE_BACKEND_URL

  const loadCreditsData = async ()=>{
    try{
      const { data } = await axios.get( backendUrl + '/api/user/credits' , 
        {
          headers : {
            token
          }
        })
        console.log(token);
        
        console.log(data);
        console.log("bhaiyo");
        
        if(data.success){
          console.log("kalse");
          console.log("hii"); 
          setCredit(data.credits)
          console.log(credit);
          setUser(data.user)
        }

    }catch(e){
      console.log(e);
      toast.error(e.message)
      
    }
  }

    const generateImage = async (prompt) =>{
      try {
       const {data} = await axios.post(backendUrl + '/api/image/generate-image',
          {prompt} ,
          {
            headers : {
              token: token  
            }
          }
        )
        if(data.success){
          loadCreditsData()
          return data.resultImage
        }else{
          toast.error(data.message)
          loadCreditsData()
          if(data.creditBalance===0){
            navigate('/buy')
          }
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

  useEffect(()=>{
    if(token){
      console.log("Token in useEffect:", token);
      loadCreditsData();
    }
  },[token])

  const logout = () =>{
    localStorage.removeItem('token')
    setToken('')
    setUser(null)
    console.log(token);
    console.log(user);
    console.log("hell");
    
  }



  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage
    
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
