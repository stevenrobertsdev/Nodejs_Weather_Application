const request = require('request');

const keys = require("./API-KEYS");

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=B901HD&key=${keys.google}`,
    json: true

},(error, response, body) => {
    console.log(body);
})