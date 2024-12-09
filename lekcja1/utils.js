function generateRandomNumber()
{
    return Math.floor((Math.random() * 100) + 1) ;
}

function CelciusToFahrenheit(celcius)
{
    return (celcius*9)/5+32;
}
function wyswietlDate()
{
    var data = new Date();
    return  new String(data.getHours() + ":" + data.getMinutes() + " " + data.getSeconds() + " " + data.getDate() + "." + (data.getMonth() + 1) + "." + data.getFullYear());
}

module.exports = 
{
    generateRandomNumber,
    CelciusToFahrenheit,
    wyswietlDate
}