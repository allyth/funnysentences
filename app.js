var http = require("http");

var server = http.createServer(function (req, res) {
    console.log("hi");
    res.write("peep");
    res.end();
});

var port = process.env.PORT || 3000;
server.listen(port);