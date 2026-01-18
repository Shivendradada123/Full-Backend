// Express ko import kar rahe hain
const express = require("express");

// Express app create kar rahe hain
const app = express();

// JSON data read karne ke liye
app.use(express.json());

// Temporary notes storage (database nahi)
let notes = [];

// Home route
app.get("/", (req, res) => {
  res.send("Notes Backend is Running");
});

// Note add karne ka route
app.post("/add-note", (req, res) => {
  const note = req.body.note;

  if (!note) {
    return res.status(400).json({ message: "Note is required" });
  }

  notes.push(note);

  res.json({
    message: "Note added successfully",
    notes: notes
  });
});

// Sare notes dekhne ka route
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Note delete karne ka route
app.delete("/delete-note/:index", (req, res) => {
  const index = req.params.index;

  if (index >= notes.length) {
    return res.status(400).json({ message: "Invalid index" });
  }

  notes.splice(index, 1);

  res.json({
    message: "Note deleted",
    notes: notes
  });
});

// Server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
