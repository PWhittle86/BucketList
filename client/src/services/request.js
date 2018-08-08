const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function(callback){
  const request = new XMLHttpRequest();
  request.open("GET", this.url);
  request.addEventListener("load", function(){
    if(this.status !== 200){
      return
    }

    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  })
  request.send();
};
