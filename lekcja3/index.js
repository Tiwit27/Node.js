const http = require('http') 
const path = require('path') 
const fs = require('fs') 
const host = '127.0.0.1' 
const port = 5050 
function odpowiedz(req,res){ 
const html = path.join(__dirname,'index.html') 
const css = path.join(__dirname,'style.css') 
const js = path.join(__dirname,'script.js') 

if(req.url==='/')
    { 
        fs.readFile(html, (err, dane)=>{ 
        if(!err)
            { 
            res.end(`${dane}`) 
            console.log('Otwarto stronę ') 
            } 
            else
            { 
                res.end(`<h3> Strona nie istenie</h3>`) 
            } 
    }) 
} 
//wczytanie CSS 
if(req.url==='/style.css')
{ 
fs.readFile(css, (err, dane)=>{ 
    if(!err)
    { 
        res.end(`${dane}`) 
        console.log('Dodano css') 
    } 
    else
    {              
        res.end(`<h3> Strona nie istenie</h3>`) 
        } 
    }) 
} 
if(req.url==='/script.js')
    { 
        adFile(js, (err, dane)=>{ 
        if(!err)
        { 
            res.end(`${dane}`) 
            console.log('Dodano js ') 
        } 
        else
        { 
            res.end(`<h3> Strona nie istenie</h3>`)         
        } 
    }) 
} 
} 
const serwerWWW = http.createServer(odpowiedz) 
serwerWWW.listen(port, host, ()=>{ 
    console.log(`Serwer działa . Adres ${host}:${port}`) 
}) 