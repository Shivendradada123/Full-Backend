const requestHandler = (req, res) => {

  // LOGIN PAGE
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <html>
      <head>
        <title>Login Page</title>
      </head>
      <body>
        <h1>This is a Login Page</h1>

        <form action="/login" method="POST">
          <label>Username</label>
          <input type="text" name="username" placeholder="Enter username"><br><br>

          <label>Password</label>
          <input type="password" name="password" placeholder="Enter password"><br><br>

          <button>Login</button>
        </form>

        <a href="/signup">Click here to sign up</a>
      </body>
      </html>
    `);
  }

  // SIGNUP PAGE
  else if (req.url === "/signup" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <html>
      <head>
        <title>Signup Page</title>
      </head>
      <body>
        <h1>This is a Signup Page</h1>

        <form action="/signup" method="POST">
          <label>Username</label>
          <input type="text" name="username" placeholder="Enter username"><br><br>

          <label>Password</label>
          <input type="password" name="password" placeholder="Enter password"><br><br>

          <button>Signup</button>
        </form>

        <a href="/">Back to login</a>
      </body>
      </html>
    `);
  }

};

module.exports = requestHandler;
conp