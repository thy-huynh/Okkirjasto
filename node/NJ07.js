const fs = require("fs");
const lueVirta = fs.createReadStream("./lorem.txt");

lueVirta.on("data", (chunk) =>{
    console.log(chunk.toString());
})
        