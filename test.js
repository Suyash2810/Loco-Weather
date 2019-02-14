const yargs = require('yargs');
const geoAddress = require('./AddressGeocoding/geocodeAddress');

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

const decodedAddress = yargv.a;
geoAddress.getGeocodeAddress(decodedAddress, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JOSN.stringify(result, undefined, 2));
    }
});