var express = require('express')
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1qaz2wsX',
    database : 'jsman',
    insecureAuth : true
  });

connection.connect();

router.post('/form', function(req, res){
    //res.send("<h1>" + req.body.email + "</h1")
    res.render('email.ejs', {'email' : req.body.email})
});

router.post('/ajax', function(req, res){
    var email = req.body.email;
    var responseData = {};

    var query = connection.query('select name from user where email="' + email + '"', function(err, rows){
        if(rows[0]){
            console.log(rows[0].name);
            responseData.result = "ok";
            responseData.name = rows[0].name;
        }else{
            responseData.result = "none";
            responseData.name = "";
        }
        res.json(responseData);
    })
});


module.exports = router;