const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "node");
app.listen(3000);
app.get("/", (req, res) => {
    const blogit = [
        {otsikko: "Tehtävä 14", 
        ingressi: "Enim esse ex adipisicing sint qui anim proident.Incididunt enim sit reprehenderit nisi velit fugiat ea irure exercitation ipsum labore magna dolor adipisicing. Aliquip proident dolore nostrud ea sunt enim adipisicing sunt anim exercitation veniam. Ex laborum minim consectetur aliqua quis occaecat eiusmod cillum esse culpa tempor enim. Exercitation non culpa proident cillum nisi amet eu aliqua cupidatat cillum voluptate proident velit cupidatat. Aliquip dolore deserunt laborum mollit quis."},
        {otsikko: "Parhaat virustorjuntaohjelmat", ingressi: "Cillum non exercitation nostrud velit et officia eiusmod. Laborum nisi pariatur sit laborum minim culpa exercitation incididunt fugiat laborum ad ut dolor nisi. Enim duis nulla cupidatat ex ullamco deserunt anim elit ipsum."},
        {otsikko: 'Koneen vuosihuolto', ingressi: 'Qui ut excepteur sunt commodo deserunt amet velit quis voluptate. Id eu sit est incididunt do cupidatat fugiat nulla labore consectetur ad dolor cillum commodo. Aliquip magna enim voluptate duis culpa elit exercitation consequat voluptate culpa voluptate. Exercitation nisi sunt aliquip occaecat.'}
    ];
    res.render("index", {otsikko: "Koti", blogit});
});
app.get("/meista", (req, res) => {
    res.render("meista", {otsikko: "Meistä"});
});
app.get("/blogit/luo", (req,res) =>{
    res.render("luo", {otsikko: "Luo uusi"});
});
app.use((req, res) => {
    res.status(404).render("404", {otsikko: "404"});
});