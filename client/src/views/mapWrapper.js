const MapWrapper = function(containerID, coords, zoom) {
  const osmLayer = new L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
  this.map = L.map(containerID).addLayer(osmLayer).setView(coords, zoom);
}

MapWrapper.prototype.currentLocation = function (coords) {
  this.map.setView(coords);
};

MapWrapper.prototype.moveMap = function (coords) {
 this.map.flyTo(coords);
};

MapWrapper.prototype.addMarker = function(coords){
  L.marker(coords).addTo(this.map);
}

module.exports = MapWrapper;
