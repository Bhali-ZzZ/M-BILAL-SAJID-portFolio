import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import userRouter from './routes/regRoute.js'
import 'dotenv/config'
import contactRouter from './routes/contactRoute.js'
import serviceRouter from './routes/serviceRoute.js'
import adminRouter from './routes/adminRoute.js'
import adminContactRouter from './routes/adminRoute.js'
import projectRouter from './routes/projectRoute.js'


const port = 4000
const app = express()

// const corsOptions = {
//     origin: '*',
//     methods: "GET, POST, DELETE, PUT, PATCH, HEAD",
//     credentials: true,
//   };

//middlewares
app.use(express.json())
// app.use(cors(corsOptions))
app.use(cors())





//api
app.use("/api/user",userRouter)
app.use("/api/form",contactRouter)
app.use("/api/services",serviceRouter)
app.use("/api/admin",adminRouter)
app.use("/api/admincontact",adminRouter)
app.use("/api/projects",projectRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING")
})
connectDB()

app.listen(port,()=>{
    console.log(`server is started on http://localhost:${port}`)
})