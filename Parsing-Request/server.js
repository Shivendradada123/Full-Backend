const http = require("http");
const handler = require('./app')
const server = http.createServer(handler);


const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
