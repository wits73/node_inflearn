var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1qaz2wsX',
    database : 'jsman',
    insecureAuth : true
  });

connection.connect();

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')



app.get('/', function(req, res){
    //res.send("<h1>test</h1")
    res.sendFile(__dirname + "/public/main.html")
});

app.post('/email_post', function(req, res){
    //res.send("<h1>" + req.body.email + "</h1")
    res.render('email.ejs', {'email' : req.body.email})
});

app.post('/ajax_send_email', function(req, res){
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

app.listen(3000, function(){
    console.log("start server on port 3000")
});

