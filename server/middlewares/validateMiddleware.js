
const validate = (schema)=> async (req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
export default validate