import projectModel from "../models/projectModel.js";

const projects = async(req,res)=>{
    
    try {
        const myProjects = await projectModel.find()
        if(!myProjects){
            res.json({success:true,message:"There is no any project"})
        }
        else{
            res.json({success:true,myProjects})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}
export default projects