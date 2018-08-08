const BucketListView = require('./views/bucketListView.js');
const CountryListView = require('./views/countryListView.js');

const bucketListView = new BucketListView();
const countryListView = new CountryListView();

const getAllBucketListCountries = function(allCountries){
  for(country of allCountries){

  }
}


const appStart = function(){
  request.get(getAllBucketListCountries);
}


document.addEventListener('DOMContentLoaded', appStart);
