const fs = require("fs");

fs.readFile("text.txt", 'utf-8',(err, zawartosc) => {
    if(err)
    {
        return console.log("Błąd otwarcia pliku");
    }
    //fs.writeFile -> zastępowanie pliku nowym
    //fs.appendFile -> dopisywanie do pliku
    fs.appendFile("kopia.txt", (zawartosc + "\n"), (err) => {
        if(err)
        {
            throw err;
        }
        console.log("Zapis zakończył się powodzeniem");
    })
})