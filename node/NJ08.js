const fs = require("fs");
const lue = fs.createReadStream("./lorem.txt");
const kirjoita = fs.createWriteStream("./blogi4.txt")

lue.pipe(kirjoita);