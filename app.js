const express = require("express");

const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.json());

app.route("/")
.get(function(req, res){
res.render('ajax', {quote: "Ajax is great!"});
});

app.post(function(req, res){
res.send({response: req.body.quote});

});



app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/class'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


/* app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/ajax.ejs')

}); */

app.listen(port, () => console.info('Listening on port: 9002'));