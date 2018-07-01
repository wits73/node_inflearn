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

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../../public/join.html'))
});




module.exports = router;