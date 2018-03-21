const   request = require('request'),
        yargs = require('yargs');

const   geoCode = require("./geocode"),
        weatherCode = require("./weathercode");

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

weatherCode.weatherCode('37.8267','-122.4233',(errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results,undefined,2));
    }
});