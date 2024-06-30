import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    name : {type:String,required:true},
    description : {type:String,required:true}
})

const projectModel = mongoose.models.projects || mongoose.model("projects",projectSchema)

export default projectModel