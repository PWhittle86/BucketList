var countryListView = function(){
  this.countries = [];
}

countryListView.prototype.showListOfCountries = function(countries){
  console.log(countries);

  let selectTag = document.getElementById('countriesDropDown');

  countries.forEach(function(country, index){
    let option = document.createElement('option');
    option.value = index;
    option.innerText = country.name;
    selectTag.appendChild(option);
  });
};


//Copy to app.js
// countryListView.prototype.handleSelected = function(countries){
//   let selectTag = document.getElementById('countriesDropDown');
//   selectTag.addEventListener('change', function(){
//     const country = countries[this.value];
//     console.log(country);
//     bucketLists.render(country);
//
//     const coords = [country.latlng[0], country.latlng[1]];
//     map.addMarker(coords);
//   });
// };

module.exports = countryListView;
