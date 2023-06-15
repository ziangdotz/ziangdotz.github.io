var express = require("express");

var app = express();

app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "/templates"));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
})

/* 启动 web 服务 */
var port = 80;
var hostName = "127.0.0.1";
app.listen(port, hostName, () => {
	console.log(`请访问 http://${hostName}:${port} 打开页面`);
});
