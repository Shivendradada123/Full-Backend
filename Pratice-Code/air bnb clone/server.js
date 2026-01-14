const express = require('express');


const app = express();

app.use('/',(req,res,next)=>{

res.send('jee ki tayari chhod do')

})







  const PORT = 3001;

  app.listen(PORT,()=>{

    console.log(`server is runnig on 3001${PORT}`)


  })

