const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(`
          <html >
        <head>
        <title> Myntra clone</title>
         </head>
            <body>
 
            <h1>Welcom to myntra</h1>
            <a href="/">Home</a> </br>
            <a href="/man">Man</a></br>
            <a href="/women">Women</a> </br>
            <a href="/kids">Kids</a> </br>  
            <a href="/cart">Cart</a></br>
            <a href="/about">About</a>
            </body>
            </html>

          
          `);
    return res.end();
  } else if (req.url === "/man") {
    res.setHeader("Content-type", "text/html");
    res.write(`
          <html >
        <head>
        <title> Myntra clone</title>
         </head>
            <body>
 
            <h1>Welcom to  Man clothes</h1>
          
            </body>
            </html>

          
          `);
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-type", "text/html");
    res.write(`
          <html >
        <head>
        <title> Myntra clone</title>
         </head>
            <body>
 
            <h1>Welcom to  Womean clothes</h1>
          
            </body>
            </html>

          
          `);

    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-type", "text/html");
    res.write(`
          <html >
        <head>
        <title> Myntra clone</title>
         </head>
            <body>
 
            <h1>Welcom to  Kids clothes</h1>
          
            </body>
            </html>

          
          `);

    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Content-type", "text/html");
    res.write(`
          <html >
        <head>
        <title> Myntra clone</title>
         </head>
            <body>
 
            <h1>Welcom to  Cart </h1>
          
            </body>
            </html>

          
          `);

    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-type", "text/html");
    res.write(`
          <html >
        <head>
        <title> Myntra clone</title>
         </head>
            <body>
 
            <h1>Welcom to  About</h1>
          
            </body>
            </html>

          
          `);

    return res.end();
  } else {
    res.setHeader("Content-type", "text/html");
    res.write(`
          <html >
        <head>
        <title> Myntra clone</title>
         </head>
            <body>
 
            <h1>404 Page Not Found</h1>
          
            </body>
            </html>

          
          `);

    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is runnig on http://localhost${PORT}`);
});
