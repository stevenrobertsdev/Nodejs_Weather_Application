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
        console.log(results.address);
        weatherCode.weatherCode(results.latitude,results.longitude,(errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Temperature is: ${weatherResults.Temperature}`);
                console.log(`Weather summary is: ${weatherResults.Summary}`);
            }
        });
    }
});

