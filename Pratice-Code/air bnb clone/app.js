const users = {};

app.use((req, res, next) => {
   const ip = req.ip;
   const now = Date.now();

   if (!users[ip]) {
      users[ip] = [];
   }

   users[ip] = users[ip].filter(time => now - time < 60000);

   if (users[ip].length >= 5) {
      return res.status(429).send("Too many requests");
   }

   users[ip].push(now);
   next();
});
