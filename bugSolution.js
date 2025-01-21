const express = require('express');
const app = express();
app.use(express.json()); // Ensure this is placed before the route handler
app.post('/user', (req, res) => {
  console.log(req.body); 
  res.send('Success!');
});
app.listen(3000, () => console.log('Server listening on port 3000'));