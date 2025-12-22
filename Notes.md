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



## Node LifeCycle & Event Loop 

![alt text](image-4.png)


## How to Exit Server 

![alt text](image-5.png)

1. Proccess.exit() -- se hota kya hai ki man lo jo fnc chal raha jisme console karna hai request ko to proccess.exit() se ham exit kar skate Note-{isko karne se server ruk jayega console ke baad} 
2. ham ctrl+c se bhi kill kar sakte hai server lekin isko kahi jagha kar skte hai jisse hamra kam hone ke baad server ruk jaye

```
const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req);
  process.exit();
});

const PORT = 5000;
server.listen(PORT, ()=>{
  console.log(`server is running at http://localhost:${PORT}`)
})
```


## UnderStanding Request Object

```
const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method, req.headers);
  
});

const PORT = 5000;
server.listen(PORT, ()=>{
  console.log(`server is running at http://localhost:${PORT}`)
})
```

1. url se basiclly hota kya hai ki url ki details ati hai 
2. Method yaha batata hai ki request ki type ki hai jaise ki {GET, POST, etc.}
3.Headrs yaha batata hai {Data type, Browser infor, Token,Authorization}