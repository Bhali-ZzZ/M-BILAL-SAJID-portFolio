import serviceModel from "../models/serviceModel.js";


const service = async (req,res)=>{

    try {
        const myServices = await serviceModel.find()
        if(!myServices){
            res.json({success:true,message:"No service found"})
        }
        res.json({success:true,message:myServices})
    } catch (error) {
        res.json({success:false,message:"Error"})
        console.log(error)
    }

}

export default service