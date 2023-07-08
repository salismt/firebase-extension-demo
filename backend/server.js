const express = require('express'); 
const app = express(); 
const port = 8080; 

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 