import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
    service : {type:String,required:true},
    description : {type:String,required:true},
    price : {type:String,required:true},
    provider : {type:String,required:true},
})

const serviceModel = mongoose.models.services || mongoose.model("services",serviceSchema)

export default serviceModel