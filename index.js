const bodyParser = require('body-parser');

const express = require('express');

const mongoose = require('mongoose');

// set up express app
const app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost/ninjago', {useNewUrlParser: true});

mongoose.Promise = global.Promise;

app.use(bodyParser.json())

app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.PORT, process.env.IP , function(){
    console.log('Now Listening for requests');
});