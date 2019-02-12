const request = require('request');

request({
        url: 'https://us1.locationiq.com/v1/search.php?key=e0e1e9d5d6eaaf&q=sydney&format=json',
        json: true
    },
    (error, response, body) => {
        console.log(JSON.stringify(body, undefined, 2));
        // console.log(response);
    }
)