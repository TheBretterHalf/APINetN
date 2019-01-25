const bodyParser = require('body-parser');

const express = require('express');

// set up express app
const app = express();

app.use(bodyParser.json())

app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.PORT, process.env.IP , function(){
    console.log('Now Listening for requests');
});