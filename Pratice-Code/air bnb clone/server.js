const express = require('express');


const app = express();

app.use('/',(req,res,next)=>{

res.send('jee ki tayari chhod do')
next();

});
app.post('/jee',(req, res,next)=>{
res.end('If You Do Something in a life Work Hard')
next()

});

app.get('jee',(res,res,next)=>{

res.send('ok')

})






  const PORT = 3001;

  app.listen(PORT,()=>{

    console.log(`server is runnig on 3001${PORT}`)


  })

