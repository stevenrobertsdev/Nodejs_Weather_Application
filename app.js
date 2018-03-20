const   request = require('request'),
        yargs = require('yargs');

const   keys = require("./API-KEYS");

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=B901HD&key=${keys.google}`,
    json: true

},(error, response, body) => {
    if(response.statusCode !== 200) {
        console.log("Could not connect to the Google servers");
    } else if(body.status !== "OK") {
        console.log("Address not found");
    } else {
        console.log(body.results[0].formatted_address);
        console.log('Latitude: ' + body.results[0].geometry.location.lat);
        console.log('Longitude: ' + body.results[0].geometry.location.lng);
    }
    
})