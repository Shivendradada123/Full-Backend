const express = require('express');


const app = express();

app.use((req,res,next)=>{
console.log(req.url, req.method )
res.send('Hello Shivendra')

})



const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`)
})
