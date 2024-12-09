const http = require("http");
const path = require("path");
const fs = require("fs");

const host = '127.0.0.1';
const port = 5555;

function Odpowiedz(request, response)
{
    const html = path.join(__dirname, "index.html");
    const css = path.join(__dirname, "style.css");
    const js = path.join(__dirname, "script.js");

    if(request.url == '/')
    {
        fs.readFileSync(html, (error, dane)=>{
            if(!error)
            {
                response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                response.end(`${dane}`);
                console.log("Otwarto stronę");
            }
            else
            {
                response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                response.end(`<h3>Strona nie istnieje</h3>`);
                console.dir(err);
            }
        })
    }
}

const server = http.createServer();

server.listen(port, host, ()=>{
    console.log(`Serwer działa. Adres: ${host}:${port}`);
})