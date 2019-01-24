const express = require('express');
const router = express.Router();
//get list of ninjas from db
router.get('/ninjas', function (req, res){
    res.send({type: 'GET'});    
});
//add new ninja to db
router.post('/ninjas', function (req, res){
    res.send({type: 'POST'})    
});
//udpate ninja in db
router.put('/ninjas/something', function (req, res){
    res.send({type: 'PUT'})    
});
//delete ninja from db
router.delete('/ninjas/:id', function (req, res){
    res.send({type: 'DELETE'})    
});

module.exports = router;