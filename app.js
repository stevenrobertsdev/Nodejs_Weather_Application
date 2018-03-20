const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=B901HD'

},(error, response, body) => {
    console.log(body);
})