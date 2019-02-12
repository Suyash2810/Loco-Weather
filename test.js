const request = require('request');

request({
        url: 'https://us1.locationiq.com/v1/search.php?key=e0e1e9d5d6eaaf&q=1301%20lombard%20street%20philedelphia&format=json',
        json: true
    },
    (error, response, body) => {
        // console.log(JSON.stringify(response, undefined, 2));
        // console.log(JSON.stringify(body, undefined, 2));
        // console.log(response);
        console.log(`The address is: ${body[0].display_name}`);
        console.log(`The latitude is: ${body[0].lat}`);
        console.log(`The latitude is: ${body[0].lon}`);
    }
)