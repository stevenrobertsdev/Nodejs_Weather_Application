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