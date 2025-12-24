const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
          <head>
<title>   First html code in node js  </title>
        </head>
        <body>
<form action="/submit" method='POST'>
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
            </html>
          `);
    return res.end();
  } else if (req.url === "/submit" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
    });

    fs.writeFileSync("user.txt", "Shivendra Saket");
    res.statusCode = 302;
    res.setHeader("location", "/");
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
