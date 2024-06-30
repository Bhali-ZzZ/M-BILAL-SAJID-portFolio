import contactModel from "../models/contactModel.js"
import regModel from "../models/regModel.js"

const allUsers = async (req,res)=>{
    try {
        
        const users = await regModel.find({} , {password:0})

        if(!users || users===0){
            return res.json({success:false,message:"User not found"})
        }
        return res.json({success:true,users})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

    const allcontacts = async (req,res)=>{

        try {
            const contactUsers = await contactModel.find()

            if(!contactUsers || contactUsers===0){
               return res.json({success:false,message:"No message found"})
            }
            return res.json({success:true , contactUsers})
        } catch (error) {
            console.log(error)
            res.json({success:false,message:"error"})
        }
    }


    const deleteUser = async (req,res)=>{
        try {
            await regModel.findByIdAndDelete(req.body.id)
            res.json({success:true,message:"User deleted"})
        } catch (error) {
            console.log(error)
            res.json({success:false,message:"Error"})
        }
    }



export {allUsers,allcontacts,deleteUser}