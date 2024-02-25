const http = require("http");
const fs = require("fs");

const palvelin = http.createServer((req, res) => {

console.log(req.url);

res.setHeader("Content-Type", "text/html");

let path = "./node/";
switch(req.url) {

    case "/":
    path += "index.html";
    break;

    case "/meista":
    path += "meista.html";
    break;

    default:
    path += "404.html";
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
