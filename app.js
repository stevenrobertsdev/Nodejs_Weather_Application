const   request = require('request'),
        yargs = require('yargs');

const   keys = require("./API-KEYS"),
        geoCode = require("./geocode");

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

geoCode.geoCode(encodedAddress);

request({
    url: `https://api.darksky.net/forecast/${keys.darkSky}/37.8267,-122.4233`,
    json: true
},(error, response, body) => {
    console.log(`Temperature is ${body.currently.temperature} with ${body.currently.summary}`);
})
