var http = require("http");

http.createServer(function (req, res) {
    res.write(`hello team..good afternoon`);
    res.end();
}
).listen(4000)