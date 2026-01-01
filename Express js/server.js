const http = require("http");

const express = require('express');

// const handler = require('./app')
const app = express()

app.use((req,res,next)=>{
  console.log( 'hey this is a first middleware', req.url, req.method)
});
app.use((req,res,next)=>{
  console.log( 'hey this is a Second middleware', req.url, req.method)
});



const server = http.createServer(app);


const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
