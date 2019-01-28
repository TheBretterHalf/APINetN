const bodyParser = require('body-parser');

const express = require('express');

const mongoose = require('mongoose');

// set up express app
const app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost/ninjago', {useNewUrlParser: true});

mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json())

app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message})
});

//listen for requests
app.listen(process.env.PORT, process.env.IP , function(){
    console.log('Now Listening for requests');
});