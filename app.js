// IMPORTING REQUIREMENTS
var express = require('express');
var bodyParser = require('body-parser');
var client = require('twilio')('AC87e26c1b941de68fffee10063b2049ee', 'a514fd0b44d077de90ca2e70b978f535');

var Data;
var Message = { from: "+19592073462" };


//INTIALIZATION
app = express();


// CONFIGURATION
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

//DATABASE CONNECTION
//mongoose.connect(“mongodb://localhost/nameofapp”, {useNewUrlParser:true});

//ROUTES
app.get('/', function (req, res) {
    res.render("index.ejs");
});

app.post('/', function (req, res) {
    Data = req.body;
    Message.body = Data.noti;
    Message.to = Data.phone;
    console.log("MESSAGE : \n");

    console.log(Message);
    client.messages.create(Message, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.render("Done.ejs");
        }
    });
});

//LOCAL HOST LISTEN
app.listen(8000, function () {
    console.log('SERVER RUNNING \nLOCAL HOST:8000');
});
