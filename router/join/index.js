var express = require('express')
var router = express.Router()
var path = require('path')
var mysql = require('mysql')
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1qaz2wsX';
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1qaz2wsX',
    database : 'jsman',
    insecureAuth : true
  });

connection.connect();

router.get('/', function(req, res){
    console.log("get join url");
    res.sendFile(path.join(__dirname,'../../public/join.html'))
});

router.post('/', function(req, res){
    
    var body = req.body;
    var email = req.email;
    var name = req.name;
    var pw = req.pw;
    // https://github.com/mysqljs/mysql#escaping-query-values
    var sql = {email : email, name : name, pw : pw}
    var query = connection.query('insert into user set ?', sql, function(err, rows){
        if(err)
            {throw err;}
        else{
            console.log('test test');
            res.render('welcome.ejs', {'name' : name, 'id':rows.insertId});
        }
           
    });
});




module.exports = router;