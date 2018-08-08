const BucketListView = require('./views/bucketListView.js');
const CountryListView = require('./views/countryListView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');

const bucketListView = new BucketListView();
const countryListView = new CountryListView();

const countryRequest = new Request('https://restcountries.eu/rest/v2/all');
const bucketRequest = new Request('http://localhost:300/api/bucket_countries');


const getAllBucketListCountries = function(allCountries){
  for(country of allCountries){
    bucketListView.addCountry(country);
  }
}

const appStart = function(){
  console.log('Hello world!')
  // request.get(getAllBucketListCountries);
  // request.get(countryRequest);


  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  const containerID = "mapContainer";
  const coords = [55.857236, -3.166804];
  const zoom = 2;
  const mainMap = new MapWrapper(containerID, coords, zoom);
}

document.addEventListener('DOMContentLoaded', appStart);
