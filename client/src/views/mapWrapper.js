const MapWrapper = function(containerID, coords, zoom) {
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
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
