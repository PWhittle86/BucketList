const BucketListView = require('./views/bucketListView.js');
const CountryListView = require('./views/countryListView.js');
const Request = require('./services/request.js');

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
  // request.get(getAllBucketListCountries);
  request.get(countryRequest);
  debugger;
}

document.addEventListener('DOMContentLoaded', appStart);
