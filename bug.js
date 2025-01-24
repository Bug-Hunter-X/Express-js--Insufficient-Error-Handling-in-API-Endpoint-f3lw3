const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      // This will only log the error, the client will not see anything.
      console.error('Error fetching user:', err);
      res.status(500).send('Something went wrong');
    }
    res.json(user);
  });
});