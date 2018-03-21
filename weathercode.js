const   request = require('request'),
        keys = require("./API-KEYS");

var weatherCode = (lat,lng,callback) => {
    request({
        url: `https://api.darksky.net/forecast/${keys.darkSky}/${lat},${lng}`,
        json: true
    },(error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined,{
                Temperature: body.currently.temperature,
                Summary: body.currently.summary
            });
        } else {
            callback("Unable to fetch any weather details");
        }
    })
}

module.exports = {
    weatherCode
}