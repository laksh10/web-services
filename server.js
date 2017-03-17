var port = 1992,
express = require('express'),
app = express().use(express.static(__dirname + '/')),
http = require('http').Server(app);
bodyParser = require('body-parser'),
engines = require('consolidate'),
path = require('path')
 
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.set('views', __dirname );
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
 
 
http.listen(port, function(){
    console.log("Node server listening on port " + port);
});
