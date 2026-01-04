const express = require('express');
const bodyParser = require('body-parser')
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
            app.get('/contact-us',(req,res,next)=>{

            console.log('this is third Second middleware')
            res.send(`<html>
                      <head>
            <title>   First html code in node js  </title>
                    </head>
                    <body>
            <form action="/contact-us" method='POST'>
            <h1> Enter your detail </h1>
            <label for="Username">Username</label>
            <input type='text' id= 'Username' name='Username' placeholder='enter your details'>
              <label for="male">Male</label>
            <input type="radio" id="male" name="gender" value="male"> <br>
            <label for="female">Female</label>
            <input type="radio" id="female" name="gender" value="female"> <br>

            <button>Submit</button>

            </form>
                    </body>
                        </html>`)
            ;
            });

              app.use(bodyParser.urlencoded())



app.post('/contact-us',(req,res,next)=>{

console.log('this is Fourth  middleware', req.body)
res.send('this is a Fourth middleware written by shivendra')
;
});







const PORT = 3001;

app.listen(PORT,()=>{

console.log(`server is runnig on http://localhost:${PORT}`)

})