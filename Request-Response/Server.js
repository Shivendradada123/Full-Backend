const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
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
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
