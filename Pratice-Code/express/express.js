const express = require('express');

const app = express();

app.use('/',(req,res,next)=>{

console.log('this is a First middleware')
next()

});

// second middleware
app.use('/',(req,res,next)=>{

console.log('this is a Second middleware')

next()
});

// Sending Response
app.use('/contact-us',(req,res,next)=>{

console.log('this is third Second middleware')
res.send('this is a Third middleware written by shivendra')
;
});

app.post('/contact-us',(req,res,next)=>{

console.log('this is Fourth  middleware')
res.send('this is a Fourth middleware written by shivendra')
;
});







const PORT = 3001;

app.listen(PORT,()=>{

console.log(`server is runnig on http://localhost:${PORT}`)

})