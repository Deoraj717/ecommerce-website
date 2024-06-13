import express from "express"
import cors from "cors"
import cookieParser from "cookie-Parser"
import errorHandler from "./utils/errorHandler.js"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static(("public")))
app.use(cookieParser())

//for handling unregistered page lookouts
app.all('*',(req,res,next)=>{
    
})

export {app}