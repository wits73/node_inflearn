var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var router = require('./router')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(router)


app.set('view engine', 'ejs')



app.listen(3000, function(){
    console.log("start server on port 3000")
});

