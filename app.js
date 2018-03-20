const   request = require('request'),
        yargs = require('yargs');

const   keys = require("./API-KEYS");

const argv = yargs
    .options({
        a: {
            alias: "Address",
            demand: true,
            describe: "Address to fetch weather for",
            string: true
        }
    })
    .help()
    .alias("help","h")
    .argv;

    var encodedAddress = encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keys.google}`,
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


request({
    url: `https://api.darksky.net/forecast/${keys.darkSky}/37.8267,-122.4233`,
    json: true
},(error, response, body) => {
    console.log(`Temperature is ${body.currently.temperature} with ${body.currently.summary}`);
})