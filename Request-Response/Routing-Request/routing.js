const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Conttent-Type", "text/html");
    res.write(`<html>
          <head>
<title>   First html code in node js  </title>
        </head>
        <body>
<form action="/submit" method='POST'>
<h1> Enter your detail </h1>
<input type='text' placeholder='enter your details'>
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
  } else {
    res.setHeader("Conttent-Type", "text/html");
    res.write(`<html>
          <head>
<title>   First html code in node js  </title>
        </head>
        <body>

          <h1>
           404 not Found
            </h1>
        </body>
            </html>
          `);
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
