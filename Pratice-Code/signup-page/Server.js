const http = require('http');
const requestHandler = require('./Login')

const server = http.createServer(requestHandler);

const PORT = 5001;


server.listen(PORT, ()=>{
  console.log(`server is running on ${PORT}`)
})