const   request = require('request'),
        keys = require("./API-KEYS");

var weatherCode = () => {
    request({
        url: `https://api.darksky.net/forecast/${keys.darkSky}/37.8267,-122.4233`,
        json: true
    },(error, response, body) => {
        if(!error && response.statusCode === 200) {
            console.log(`Temperature is ${body.currently.temperature} and weather is ${body.currently.summary}`);
        } else {
            console.log("Unable to fetch weather")
        }
    })
}

module.exports = {
    weatherCode
}