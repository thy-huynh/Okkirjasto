const http = require("http");
const fs = require("fs");

const palvelin = http.createServer((req, res) => {

console.log(req.url);

res.setHeader("Content-Type", "text/html");

let path = "./node/";
switch(req.url) {

    case "/":
    path += "index.html";
    res.statusCode = 200;
    break;

    case "/meista":
    path += "meista.html";
    res.statusCode = 200;
    break;

    default:
    path += "404.html";
    res.statusCode = 404;
}

fs.readFile(path, (err, data) => {
    if (err) {
    console.log(err);
    res.end();
    }

    res.end(data);
});
});

palvelin.listen(3000, "localhost", () => {
console.log("Kuunnellaan portin 3000 pyyntöjä");
});
