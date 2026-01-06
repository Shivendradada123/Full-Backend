const express = require('express');

const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" }
];

app.get('/', (req, res) => {
  res.send("Welcome to Simple Backend API");
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.json({
    message: "User added successfully",
    user: newUser
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
