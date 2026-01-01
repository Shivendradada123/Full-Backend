

const express = require('express');

// const handler = require('./app')
const app = express()

app.use((req,res,next)=>{
  console.log( 'hey this is a first middleware', req.url, req.method)
  next()
});
app.use((req,res,next)=>{
  console.log( 'hey this is a Second middleware', req.url, req.method)
  res.send('<h1>LING ka Happy New Year</h1>')
});





const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
