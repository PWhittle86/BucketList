const BucketListView = require('./views/bucketListView.js');
const CountryListView = require('./views/countryListView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');

const bucketListView = new BucketListView();
const countryListView = new CountryListView();

const countryRequest = new Request('https://restcountries.eu/rest/v2/all');
const bucketRequest = new Request('http://localhost:300/api/bucket_countries');

allCountries = [];

const getAllBucketListCountries = function(allCountries){
  for(country of allCountries){
    countryListView.addCountry(country);
  }
}

const pullCountriesFromCountriesAPI = function(countriesAPI){
  for(country of countriesAPI){
    allCountries.push(country);
  }
}

const appStart = function(){
  console.log('Hello world!')
  // request.get(getAllBucketListCountries);
  countryRequest.get(pullCountriesFromCountriesAPI);

  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  const containerID = "mapContainer";
  const coords = [55.857236, -3.166804];
  const zoom = 1;
  const mainMap = new MapWrapper(containerID, coords, zoom);
}

document.addEventListener('DOMContentLoaded', appStart);
