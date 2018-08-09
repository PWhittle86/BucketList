const MapWrapper = function(containerID, coords, zoom) {
  const osmLayer = new L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
});
  this.map = L.map(containerID).addLayer(osmLayer).setView(coords, zoom);
}

// MapWrapper.prototype.currentLocation = function (coords) {
//   this.map.setView(coords);
// };

MapWrapper.prototype.moveMap = function (coords) {
 this.map.flyTo(coords);
};

MapWrapper.prototype.addMarker = function(coords, country){
  L.marker(coords).addTo(this.map).bindPopup(country.name);
}

module.exports = MapWrapper;
