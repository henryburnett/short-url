const express = require('express');
const router = express.Router();
const url = require('../controllers/urls');

router.get('/', function(req, res){
    url.index(req,res);
});

router.post('/addurl', function(req, res) {
    url.create(req,res);
});

router.get('/geturl', function(req, res) {
    url.list(req,res);
});

router.get('/count', function(req, res) {
    url.countDocuments(req, res);
})

export = router