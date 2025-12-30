const http = require("http");

// temporary memory (database jaisa samjho)
let user = {};

const server = http.createServer((req, res) => {

  // LOGIN PAGE
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h2>Login</h2>
      <form method="POST" action="/login">
        <input name="username" placeholder="Username" required /><br><br>
        <input name="password" type="password" placeholder="Password" required /><br><br>
        <button>Login</button>
      </form>
      <a href="/signup">Signup</a>
    `);
  }

  // SIGNUP PAGE
  else if (req.url === "/signup" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h2>Signup</h2>
      <form method="POST" action="/signup">
        <input name="username" placeholder="Username" required /><br><br>
        <input name="password" type="password" placeholder="Password" required /><br><br>
        <button>Signup</button>
      </form>
      <a href="/">Login</a>
    `);
  }

  // SIGNUP LOGIC
  else if (req.url === "/signup" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const data = new URLSearchParams(body);
      user.username = data.get("username");
      user.password = data.get("password");

      res.end("Signup successful. Go back and login.");
    });
  }

  // LOGIN LOGIC
  else if (req.url === "/login" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const data = new URLSearchParams(body);
      const username = data.get("username");
      const password = data.get("password");

      if (username === user.username && password === user.password) {
        // COOKIE SET
        res.setHeader("Set-Cookie", `user=${username}`);
        res.end("Login successful. Cookie set ho gayi.");
      } else {
        res.end("Invalid username or password");
      }
    });
  }

  // DASHBOARD (COOKIE CHECK)
  else if (req.url === "/dashboard") {
    const cookies = req.headers.cookie || "";

    if (cookies.includes("user=")) {
      res.end("Welcome to Dashboard (Logged In)");
    } else {
      res.end("Please login first");
    }
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
