var request = require('request');

let currentWeatherForecast = (data, callback) => {

    let lat = data.latitude;
    let lon = data.longitude;

    request({
            url: `http://api.openweathermap.org/data/2.5/weather?APPID=&lat=${lat}&lon=${lon}`,
            json: true
        },
        (error, response, body) => {

            if (error) {
                callback("There was an error. Connection could not be made.");
            } else if (body.cod === 404) {
                callback(body.message);
            } else if (body.cod === 200) {
                let object = {
                    name: body.name,
                    longitude: body.coord.lon,
                    latitude: body.coord.lat,
                    weather: body.weather,
                    temperature: body.main.temp,
                    pressure: body.main.pressure,
                    humidity: body.main.humidity,
                    wind: body.wind,
                    visibility: body.visibility

                }
                callback(object);
            } else {
                callback("An error was encountered.");
            }
        }
    )
}

module.exports = {
    currentWeatherForecast
}