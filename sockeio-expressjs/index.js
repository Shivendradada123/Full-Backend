const express = require("express")
const dotenv = require('dotenv')
const homeRoute = require("./router/home.controller")
const {Server} = require("socket.io")
const http = require("http")
// initialise the dotenv
dotenv.config()

// port from dotenv
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use("/",homeRoute)

// create seerver for the socket io
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:['http://localhost:5173'],
        methods:["GET","POST"],
        credentials:true
    }
})

io.on("connection",(socket)=>{
    console.log("user connected: ", socket.id)

    socket.on("test",(data)=>{
        console.log(data)

        io.emit("test2",data)
    })
})
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})