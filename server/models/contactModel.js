import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    message:{type:String,required:true}
})

const contactModel = mongoose.models.contact || mongoose.model("contact",contactSchema)

export default contactModel