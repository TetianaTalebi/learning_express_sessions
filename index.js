const express = require('express');
const session = require('express-session');

const app = express();

// Create an object with the secret string for session
// We keep the secret string in index.js only for demo purposes!!!
const sessionOptions = {
    secret: 'notagoodsecret', 
    resave: false,
    saveUninitialized: true};

app.use(session(sessionOptions));

app.get('/viewcount', (req, res)=>{
    if (req.session.count){
        req.session.count+=1;
    } else {
        req.session.count = 1;
    }
    // console.log(req.session);
    res.send(`You have viewed this page ${req.session.count} times`);
})

app.get('/register', (req, res) =>{
    const {username = 'noname'} = req.query;
    req.session.username = username;
    console.log(req.session);
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const {username} = req.session;
    res.send(`Welcome back ${username}!!!`)
})


app.listen(3000, ()=>{
    console.log("Listening on port 3000 !!!");
})