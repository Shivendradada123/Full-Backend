const http = require('http');
const errorTest = require('./Syntax')
const run = require('./runtime')
const logic = require('./logicerror')

const server = http.createServer  ((req,res)=>{
console.log(req);
// errorTest();
// run();
logic()

});

const PORT = 5001;


server.listen(PORT, ()=>{
  console.log(`server is running on  http://localhost:${PORT}`)
})