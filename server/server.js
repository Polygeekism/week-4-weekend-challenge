var express=require("express");
var app = express();
var port = 5000;
var employees = require("./routes/employees")
var bodyParser = require('body-parser');

app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.listen(port, function(){
    console.log('listening on port ', port);
})

app.use('/employees', employees);