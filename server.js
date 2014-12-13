var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    cors = require('cors'),
    open = require('open'),
    port = parseInt(process.env.PORT, 10) || 1337;

app.get("/", function (req, res) {
  res.redirect("/index.html");
}); 
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.use(cors);
console.log("Simple static server with CORS listening at http://localhost:" + port);
app.listen(port);
 open("http://localhost:" + port);