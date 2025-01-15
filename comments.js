// Create web server
const express = require('express');
const app = express();

// Use express.json() to parse the body of the request.
app.use(express.json());

// Array to store comments
const comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});