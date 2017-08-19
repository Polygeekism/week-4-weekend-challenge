var pool = require("../modules/pool.js")
var express = require('express');
var router= express.Router();

router.get('/', function(){
    console.log('made it to the get route');

});

router.post('/', function(){
    console.log('made it to the get route');
});