const express = require("express")
const dotenv = require('dotenv')
const homeRoute = require("./router/home.controller")
// initialise the dotenv
dotenv.config()

// port from dotenv
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use("/",homeRoute)



app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})