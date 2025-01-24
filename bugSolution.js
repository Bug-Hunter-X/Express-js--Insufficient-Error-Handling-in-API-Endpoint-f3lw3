const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Improved error handling
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      //Send specific error message based on error type
      if(err.message.includes('not found')){ 
        return res.status(404).json({ error: 'User not found' });
      } else {
        return res.status(500).json({ error: 'Failed to fetch user' });
      }
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  });
});