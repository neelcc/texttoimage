import userModel from "../models/userModel.js";
import FormData from 'form-data'
import axios from "axios"

export const generateImage = async (req,res)=>{

    try{
        const { prompt } = req.body
        const userId = req.userId
        console.log("am i working?");
        
        const user = await userModel.findById(userId)

        console.log(user);
        console.log(prompt);
        
        if(!user || !prompt){
            return res.json({
                success:false,
                message:"Missing Details!" 
            })
        }
        
        if(user.creditBalance === 0 || userModel.creditBalance < 0)
        {
            return res.json({
                success:false,
                message : "No Credit Balance",
                creditBalance : user.creditBalance
            })
        }

        const formData = new FormData()
        formData.append('prompt',prompt)

      const {data} =  await axios.post("https://clipdrop-api.co/text-to-image/v1",formData,{
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
              },
              responseType: 'arraybuffer'
        })
        const base64Image = Buffer.from(data,'binary').toString('base64')
        const resultImage = `data:image/png;base64,${base64Image}`
        
        console.log(resultImage);
        

        await userModel.findByIdAndUpdate(user._id,{creditBalance : user.creditBalance - 1})
        res.json({
            success:true,
            messaage : 'Image Generated',
            creditBalance : user.creditBalance - 1,
            resultImage
        })

    } catch(error){
        console.log(error.message);
        res.json({
            success:false,
            message : error.message
        })
    }

}