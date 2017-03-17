var port = 399,
express = require('express'),
app = express().use(express.static(__dirname + '/')),
http = require('http').Server(app);
 
 
app.use('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.use(function(req, res) {
    res.sendfile(__dirname + '/index.html');
});
 
 
 
http.listen(port, function(){
    console.log("Node server listening on port " + port);
});