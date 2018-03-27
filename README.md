# City Finder v.2.2.0 with Vue 2

## Description.
This light web application can help to find information about a city ot town just by a name. The result will be a single card or several cards for all cities/towns with the current name.

## Project Guidelines
- Simple - very user friendly
- Lightweight - Small file and memory footprint
- Flexible - Very easy to maintain

## How to use
* Chose the country - USA, Canada or Mexico
* Fill down the name of the city and click the button
* Try in at https://city-find.herokuapp.com/

## Technologies
* JavaScript Framework - Vue2 with Vuex
* User Interface Framework - Semantic UI
* Database - Firebase
* Builder - Webpack
* Engine - Node JS and NPM 

Also this app uses [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/) to find the current city/tonw on the map and show it in the card.
## Reference

I developed this project using several frameworks:
* [City Finder v3.1.0 with Angular](https://github.com/eriixon/city-finder-angular)
* [City Finder v4.0.0 with React](https://github.com/eriixon/city-finder-react)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

The last step is to provide Firebase tokens, put them to fbconfig.js in config directory (needs to be created):
```
{
"apiKey":"...", 
"authDomain":"...",
"databaseURL": "...",
"projectId": "...",
"storageBucket": "...",
"messagingSenderId": "..."
}
```

## Version
The current version is 2.1 and placed at Heroku for demostration https://findcity.herokuapp.com/

## License
See the LICENSE file in the root directory of this source tree. Feel free to use and modify the code.
