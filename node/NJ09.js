const http = require("http");
const palvelin = http.createServer((req, res) => {
    
    console.log("pyyntö lähetetty");
});

palvelin.listen(3000, "localhost", () => {
    console.log("Portin 3000 pyyntöjä kuunnellaan");
});