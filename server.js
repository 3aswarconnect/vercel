var express = require('express');
var path = require('path');

var app = express();

function resolveFilePath(fileName) {
    return path.resolve(__dirname, fileName);
}

app.get('/index', function(req, res) {
    res.sendFile(resolveFilePath('index.html'));
});
app.use('/static', express.static(resolveFilePath('public')));
app.listen(5000, function() {
    console.log('Server is listening on port 5000');
});
