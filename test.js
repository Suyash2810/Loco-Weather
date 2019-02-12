const request = require('request');
const yargs = require('yargs');


const yargv = yargs
    .options({
        a: {
            description: 'Address to fetch weather for.',
            demand: true,
            alias: 'address',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const decodedAddress = yargv.address;
const encodedAddress = encodeURIComponent(decodedAddress);

request({
        url: `https://us1.locationiq.com/v1/search.php?key=e0e1e9d5d6eaaf&q=${encodedAddress}&format=json`,
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