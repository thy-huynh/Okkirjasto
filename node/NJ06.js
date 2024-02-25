var fs = require("fs");
if(!fs.existsSync("./Uusi"))
{
    fs.mkdir("./Uusi", (err) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log("Uusi kansio luotu!");
    })
}
else
{
    fs.rmdir("./Uusi", (err) => {
        if(err)
        {
            console.log(err);
        }
        console.log("Valittu kansio on poistettu!");
    })
}
