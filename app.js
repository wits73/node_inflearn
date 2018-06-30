var express = require('express')
var app = express()
var bodyParser = require('body-parser')

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
    console.log(req.body.email)
    var responseData = {'result':'ok', 'email': req.body.email}
    res.json(responseData)
});

app.listen(3000, function(){
    console.log("start server on port 3000")
});

