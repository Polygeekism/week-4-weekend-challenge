var express=require("express");
var app = express();
var employees = require("./routes/employees")
var bodyParser = require('body-parser');

var port = 5000;

app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.listen(port, function(){
    console.log('listening on port ', port);
})

app.use('/employees', employees);