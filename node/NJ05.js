const fs = require('fs');
fs.writeFile("./blogi2.txt", "Tehtävä 5 valmis", () => {
    console.log("Tämä tieto kirjoitettiin tiedostoon");
})
                    