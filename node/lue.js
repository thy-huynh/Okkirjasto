const fs = require("fs");
fs.readFile("./blogi.txt", (err, data) => {
    if(err)
    {
        console.log(err);
    }
    console.log(data.toString());
})
