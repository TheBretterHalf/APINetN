const express = require('express');
const router = express.Router();
const Ninja = require('../Models/ninja');
//get list of ninjas from db
router.get('/ninjas', function (req, res){
    res.send({type: 'GET'});    
});
//add new ninja to db
router.post('/ninjas', function (req, res){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });

});
//udpate ninja in db
router.put('/ninjas/:id', function (req, res){
    res.send({type: 'PUT'})    
});
//delete ninja from db
router.delete('/ninjas/:id', function (req, res){
    res.send({type: 'DELETE'})    
});

module.exports = router;