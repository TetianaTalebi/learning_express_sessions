const express = require('express');
const session = require('express-session');

const app = express();

// Create an object with the secret string for session
// We keep the secret string in index.js only for demo purposes!!!
app.use(session({secret: 'notagoodsecret'}));


app.listen(3000, ()=>{
    console.log("Listening on port 3000 !!!");
})