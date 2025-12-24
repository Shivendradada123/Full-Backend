import express from "express"
import {Server} from "socket.io"
import http from "http"
import dotenv from "dotenv"
import { mongooconnect } from "./lib/mongodb.js"
import { mongoConnectMiddleWare } from "./middleware/mongoconnectmiddleware.js"
import authRouters from "./routers/auth.router.js"
import authMiddleware from "./middleware/authmiddleware.js"
import currreUserRoute from "./routers/currentUser.router.js"
import classRoutes from './routers/class.router.js'
import studentRoute from './routers/student.controller.js'
dotenv.config()

const mongdbUri = process.env.MONGODB_URI 
const app = express()
const PORT = process.env.PORT || 5000;
const server = http.createServer(app)

mongooconnect(mongdbUri)

app.use(mongoConnectMiddleWare());
app.use("/auth", authRouters)
app.use("/auth", authMiddleware , currreUserRoute )
app.use("/class", authMiddleware, classRoutes)
app.use("/student" , studentRoute)
/// initialise scoket 
const socket = new Server(server,{
    cors:{
        methods:["GET", "POST", "PUT", "PATCH", 'DELETE'],
        allowedHeaders:["Content-Type","Autherization"],
        credentials:true
    }
})



server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})




