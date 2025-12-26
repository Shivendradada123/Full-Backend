const http = require('http')

const server = http.createServer();



const PORT = 3000;

server.listen(PORT, ()=>{
console.log(`server is runnig at http://localhost:${PORT}`)



})