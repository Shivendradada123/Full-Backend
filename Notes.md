# Nodejs by Shivendra

## node js introduction 

1. nodejs ek backend hai 
2. V8+ Backend feature = Nodejs
3. V8  C++ me likha gya hai

## What is IDE 
1. IDE = Integrated Development Envionment
eg. Vs code, Cursor AI 


##  What is REPL     
1. REPL = Read Eval print Loop 
2. REPL se ham node terminal  me hi use kar sakte hai 
3. terminal me = node type karke enter kare 
4. jo karna ho kare jaise ki 

```js
D:\Full-Backend>node
Welcome to Node.js v24.3.0.
Type ".help" for more information.
> let a = "Shivendra"
undefined
> a
'Shivendra'
> console.log(a)
Shivendra
undefined
> 8+8
16
```


## DNS

1. DNS = Domain name service
2. Domain Name Entry = jab koye User broswer me search karta hai eg- {www.google.com} to DNS ek IP adress deta hai joki google ka hota hai 

3. DNS Query: isme hota kya hai ki jab search sarte hai to isme se qery jaati hai phir uuse ip adress milt ahia 
4. DNS Server: Ime Ip Store rahta hia 
5. Root DNS : yaha jo hota uska EG- {.com,.org, .ai } isko check karta hai

## HOW  WEB Work?

![alt text](image.png)

## What are Protocals
![alt text](image.png)


## Node COre Modules

![alt text](image-1.png)
![alt text](image-2.png)

## Requird Keyword
1. isse kya hota hai ki node module se import karta hai 
2. Eg- {const http = require('modul')}
![alt text](image-3.png)



## How to create basics server code
```
const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req);
});

const PORT = 5000;
server.listen(PORT, ()=>{
  console.log(`server is running at http://localhost:${PORT}`)
})
```