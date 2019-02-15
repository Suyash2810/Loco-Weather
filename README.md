# Loco-Weather

## Introduction

A console driven script which is used to fetch the geographical location of a place. The location can be obtained
by entering the place name or the postal code. Further the script uses the latitude and logitude to fetch the current weather information about the place. The project is created in NodeJs by the implmentation of two APIs: LocationIQ and OpenWeatherMap API.

### Prerequisites

To run the project one will need Node Package Manager to be installed in the system. To install it in the system click [here](https://www.npmjs.com/get-npm). 

Further a command line interface will be required to run the node scripts.


### Steps

To install the dependencies required follow the steps below:

```
1. Open the command line interface.
2. Type npm install yargs@version --save. To see the latest version visit [here](https://www.npmjs.com/package/yargs). Read the description to have an understanding about it.
3. Then type npm install request@version --save. To see the version visit [here](https://www.npmjs.com/package/request). 
4. Check in package.json if the dependencies have been properly installed and saved.
```

Setting the APIs:

LocationIQ:

```
1. Go to [LocationIQ](https://my.locationiq.com).
2. Sign up with your email.
3. Go to the dashboard and where the token will be given.
4. Copy the token and open the geocodeAddress.js file and paste the API key token in the url at 'key=###'.
5. One API is set up.
```

OpenWeatherMap:

```
1. Go to [OpenWeatherMap](https://home.openweathermap.org/).
2. Sign up wth your email.
3. Go the account and open the tab named as API keys.
4. Copy the API key and open the currentWeatherForecast.js file and paste the API key in the url at 'APPID=###'.
5. Great the work is done.
```

## Running the program

To run the script open the folder in which the file test.js is. Then in the CLI type - node test.js -a postal code
to get the geographical location and the weather data.

To get the data based on place name type - node test.js -a name.


## Authors

* **Suyash Awasthi** - *Initial work* - [suyash2810](https://github.com/suyash2810)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Suyash2810/Loco-Weather/blob/master/LICENSE) file for details

