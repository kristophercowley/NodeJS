var express = require('express');
var app = express();
var port = 8080;
app.use(express.static(__dirname + '/public'));
app.get('/doesitwork',function(req,res){
    res.send('ya! sir');
})
//fires up my port
app.listen(port,function(){
    console.log('The app is alive and kickin on port:' + port)
})