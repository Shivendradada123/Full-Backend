const http = require('http');

const server = function (req, res){
  console.log(req)
};

 const  port = http.createServer(server);
port.listen(5000);
