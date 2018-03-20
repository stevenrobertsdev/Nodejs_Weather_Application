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

geoCode.geoCode(argv.a,(errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results,undefined,2));
    }
});

request({
    url: `https://api.darksky.net/forecast/${keys.darkSky}/37.8267,-122.4233`,
    json: true
},(error, response, body) => {
    if(!error && response.statusCode === 200) {
        console.log(`Temperature is ${body.currently.temperature} with ${body.currently.summary}`);
    } else {
        console.log("Unable to fetch weather")
    }
})
