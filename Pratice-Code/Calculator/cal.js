

      const requestHandler =((req,res)=>{
        console.log(req.url)

        if(req.url === '/'){

          res.setHeader("Content-Type", "text/html")
          res.write(`
                  <html >
                  <head>
                    <title>Calculator</title>
                  </head>
                  <body>
                    
                  <h1>Welcome To My Backend Calculator</h1>
                  <a href="/calculator">Calculator</a>

                  </body>
                  </html>`)
              return res.end();


        }else if(req.url=== '/calculator'){

          res.setHeader("Content-Type", "text/html")
          res.write(`
                      
                      <html >
          <head>
            <title>Calculator</title>
          </head>
          <body>
              <form action='/calculate-result' method='POST'>
            
                <input type="number" placeholder = 'enter a number' name = 'first'> <br> <br>
                <input type="number" placeholder = 'enter a number' name = 'second'> <br> <br>

                <button>Calculate</button>

              </form>

          </body>
          </html>
            
            
            
            `)


        }else{
            res.setHeader("Content-Type", "text/html")
          res.write(`
                  <html >
                  <head>
                    <title>Calculator</title>
                  </head>
                  <body>
                    
                  <h1>404 Page Does not exist</h1>
              <a href="/">Go To Home</a>
                 

                  </body>
                  </html>`)

                 res.end()
        
        }
        
        
      






      });


      exports.requestHandler = requestHandler;