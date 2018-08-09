
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
  console.log(country);
  li.innerText = country.name;
  ul.appendChild(li);
}


module.exports = BucketListView;
