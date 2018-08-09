const FurtherInfoView = require('./furtherInfoView.js');

var BucketListView = function(){
  this.bucketLists = [];
}

BucketListView.prototype.addCountry = function(country){
  this.bucketLists.push(country);

  this.render(country);
}

BucketListView.prototype.clear = function(country) {
  this.bucketLists = [];
  const ul = document.querySelector('#countries');
  ul.innerHTML = '';
}

BucketListView.prototype.render = function(country){
  const ul = document.querySelector('#countries');
  const li = document.createElement('li');
  li.id = 'country_name'
  li.innerText = country.name;
  ul.appendChild(li);
  li.addEventListener('click', function(){
    console.log("country has been clicked");
    let furtherInfo = new FurtherInfoView();
    furtherInfo.clearContent();
    furtherInfo.render(country);
  });

}


module.exports = BucketListView;
