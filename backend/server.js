const express = require('express'); 
require('dotenv').config()
const admin = require("firebase-admin");
const cors = require('cors');
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY)

const app = express(); 
app.use(cors());

const port = process.env.PORT || 8080; 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    admin
        .auth()
        .createUser({email, password})
        .then((userRecord) => {
            res.status(201).json({ message: 'user created'})
        })
        .catch((error) => {
            res.status(400).json({ error: error.message})
        })
});