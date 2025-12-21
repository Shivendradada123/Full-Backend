const express = require("express")
const dotenv = require('dotenv')
const homeRoute = require("./router/home.controller")
const {Server} = require("socket.io")
const http = require("http")
// initialise the dotenv
dotenv.config()

// port from dotenv
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use("/",homeRoute)

// create seerver for the socket io
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen from client
  socket.on("send_message", (data) => {
    console.log("Message received:", data);

    // Send to all connected clients
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})