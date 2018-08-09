const BucketListView = require('./views/bucketListView.js');
const CountryListView = require('./views/countryListView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');

const bucketListView = new BucketListView();
const countryListView = new CountryListView();

const countryRequest = new Request('https://restcountries.eu/rest/v2/all');
const bucketRequest = new Request('http://localhost:3000/api/bucket_countries');

allCountries = [];

const getAllBucketListCountries = function(allCountries){
  for(country of allCountries){
    bucketListView.render(country);
  }
}

const pullCountriesFromCountriesAPI = function(countriesAPI){
  for(country of countriesAPI){
    allCountries.push(country);
  }
  countryListView.showListOfCountries(allCountries);
}
const handleSelected = function(countries){
  let selectTag = document.getElementById('countryDropDown');

  const country = allCountries[selectTag.value];
  console.log(country);
  bucketListView.addCountry(country);
  bucketRequest.post(country);

  const coords = [country.latlng[0], country.latlng[1]];
  console.log(coords);
  mainMap.addMarker(coords);
};

const appStart = function(){
  console.log('Hello world!')
  bucketRequest.get(getAllBucketListCountries);
  countryRequest.get(pullCountriesFromCountriesAPI);

  const addCountryButton = document.getElementById('addCountry');
  addCountryButton.addEventListener('click', handleSelected);

  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  const containerID = "mapContainer";
  const coords = [55.857236, -3.166804];
  const zoom = 2;
 mainMap = new MapWrapper(containerID, coords, zoom);
}

document.addEventListener('DOMContentLoaded', appStart);
