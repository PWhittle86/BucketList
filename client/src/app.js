// const Request = require('./services/request.js')
//
// const countriesRequest = new Request("https://restcountries.eu/rest/v2/all");

const appStart = function(){
  console.log('It works!');
  request.get(countriesRequest);
  debugger;
}

document.addEventListener('DOMContentLoaded', appStart);
