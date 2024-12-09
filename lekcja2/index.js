const os = require('os');

console.log(`Node został zainstalowany i działa pod kontrolą ${os.version()} (wywodzącego się z rodziny systemów
${os.type()}). System został uruchomiony ${os.uptime()} sekund temu, a ilość dostępnej 
pamięci RAM to ${(os.totalmem/1073741824).toFixed(2)} GB`);


const http = require("http");
const host = '127.0.0.1';
const port = 5555;

const server = http.createServer((req, res)=>{
    res.end("Hello World");
    console.log(req.url);
})

server.listen(port, host, ()=>{
    console.log(`Serwer działa. Adres: ${host}:${port}`);
})