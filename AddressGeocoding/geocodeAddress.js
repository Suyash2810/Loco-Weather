const request = require('request');
const geoWeather = require('./currentWeatherForecast');

let getGeocodeAddress = (decodedAddress, returnData) => {
    const encodedAddress = encodeURIComponent(decodedAddress);

    request({
            url: `https://us1.locationiq.com/v1/search.php?key=&q=${encodedAddress}&format=json`,
            json: true
        },
        (error, response, body) => {
            // console.log(JSON.stringify(response, undefined, 2));
            // console.log(JSON.stringify(body, undefined, 2));
            // console.log(response);
            if (error) {
                returnData('There was a problem. Connection could not be made.');
            } else if (body.status == 'error') {
                returnData('The address could not be found or is invalid.');
            } else if (response.statusCode === 200) {
                var obj = {
                    address: body[0].display_name,
                    latitude: body[0].lat,
                    longitude: body[0].lon
                }
                geoWeather.currentWeatherForecast(obj, (error, resultData) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(JSON.stringify(resultData, undefined, 3));
                    }
                });
                returnData(obj);
            } else {
                console.log("Error has been encountered.");
            }

        }
    )
}

module.exports = {
    getGeocodeAddress
}