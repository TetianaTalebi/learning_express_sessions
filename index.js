const express = require('express');
const session = require('express-session');

const app = express();

// Create an object with the secret string for session
// We keep the secret string in index.js only for demo purposes!!!
app.use(session({
    secret: 'notagoodsecret', 
    resave: false,
    saveUninitialized: true}));

app.get('/viewcount', (req, res)=>{
    if (req.session.count){
        req.session.count+=1;
    } else {
        req.session.count = 1;
    }
    // console.log(req.session);
    res.send(`You have viewed this page ${req.session.count} times`);
})


app.listen(3000, ()=>{
    console.log("Listening on port 3000 !!!");
})