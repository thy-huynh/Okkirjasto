const express = require("express");
const app = express();
const path = require("path");

app.listen(3000);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/meista", (req, res) => {
    res.sendFile(path.join(__dirname, "meista.html"));
});

app.get("/minusta", (req, res) => {
    res.redirect("/meista");
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "404.html"));
});
