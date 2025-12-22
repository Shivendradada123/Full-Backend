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

          <h1>
           This is a home page
           
            </h1>
            <a href="/about">About</a>
        </body>
            </html>
          `);
  } else if (req.url === "/about") {
    res.setHeader("Conttent-Type", "text/html");
    res.write(`<html>
          <head>
<title>   First html code in node js  </title>
        </head>
        <body>

          <h1>
            Shivendra mauhariya
            
            </h1>
        </body>
            </html>
          `);
    res.end();
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
