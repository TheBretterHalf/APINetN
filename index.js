const express = require('express');

// set up express app
const app = express();

app.get('/api', function(req, res){
    console.log('GET request')
    res.send({name:'yoshi'});
});

//listen for requests
app.listen(process.env.PORT, process.env.IP , function(){
    console.log('Now Listening for requests');
});