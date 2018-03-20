
const   request = require('request');

const   keys = require("./API-KEYS");

var geoCode = (address) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${keys.google}`,
        json: true
    
    },(error, response, body) => {
        if(error) {
            console.log("Unable to connect to Google servers")
        } else if(body.status === "ZERO_RESULTS") {
            console.log("Address not found");
        } else if(body.status === "OK") {
            console.log(body.results[0].formatted_address);
            console.log('Latitude: ' + body.results[0].geometry.location.lat);
            console.log('Longitude: ' + body.results[0].geometry.location.lng);
        }  
    })
}

module.exports = {
    geoCode
};