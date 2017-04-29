var exp = require('express');
var app = exp();

app.use(exp.static(__dirname + '/public'));

/*app.get('/players', function(req, res){
	var query = req.query;
	console.log("query value "+ JSON.stringify(query));
})*/

app.get('/players/:name/:country', function(req, res){
	console.log("query value "+ req.params.name + " and " + req.params.country);
	res.end("query value "+ req.params.name + " and " + req.params.country);
})

var port = process.env.PORT || 4000;
app.listen(port, function(){
	console.log("server is listening to the port " + port);
})