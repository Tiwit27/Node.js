const fs = require("fs");
const plik = "test.txt";

fs.access(plik, fs.constants.F_OK | fs.constants.W_OK, (err)=>{
    if(err)
    {
        console.log(`${plik} ${err.errno== -4058 ? 'nie istnieje' : 'tylko do odczytu'}`);
    }
    else
    {
        console.log(`plik ${plik} istnieje i pozwala na zapis`);
    }
})