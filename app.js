var http = require("http");

var server = http.createServer(function (req, res) {
    console.log("poop");
    res.write("peep");
    res.end();
});

server.listen(3000);