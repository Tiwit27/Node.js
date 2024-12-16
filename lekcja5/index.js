const fs = require("fs");
const katalog = "./";
let licznik = 0;

fs.readdir(katalog, (err, dane) => {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("\nZawartość katalogu: ");
        dane.forEach(plik => {
            console.log(plik);
            licznik++;
        })
    }
    console.log("\nLiczba wszystkich elementów w katalogu: " + licznik);
})