/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const BucketListView = __webpack_require__(/*! ./views/bucketListView.js */ \"./client/src/views/bucketListView.js\");\nconst CountryListView = __webpack_require__(/*! ./views/countryListView.js */ \"./client/src/views/countryListView.js\");\nconst Request = __webpack_require__(/*! ./services/request.js */ \"./client/src/services/request.js\");\nconst MapWrapper = __webpack_require__(/*! ./views/mapWrapper.js */ \"./client/src/views/mapWrapper.js\");\n\nconst bucketListView = new BucketListView();\nconst countryListView = new CountryListView();\n\nconst countryRequest = new Request('https://restcountries.eu/rest/v2/all');\nconst bucketRequest = new Request('http://localhost:3000/api/bucket_countries');\n\nallCountries = [];\n\nconst getAllBucketListCountries = function(allCountries){\n  for(country of allCountries){\n    // countryListView.addCountry(country);\n    bucketListView.render(country);\n  }\n}\n\nconst pullCountriesFromCountriesAPI = function(countriesAPI){\n  for(country of countriesAPI){\n    allCountries.push(country);\n  }\n  countryListView.showListOfCountries(allCountries);\n}\n\nconst appStart = function(){\n  console.log('Hello world!')\n  bucketRequest.get(getAllBucketListCountries);\n  countryRequest.get(pullCountriesFromCountriesAPI);\n\n\n\n  const osmLayer = new L.TileLayer(\"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\")\n  const containerID = \"mapContainer\";\n  const coords = [55.857236, -3.166804];\n  const zoom = 2;\n  const mainMap = new MapWrapper(containerID, coords, zoom);\n}\n\ndocument.addEventListener('DOMContentLoaded', appStart);\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/services/request.js":
/*!****************************************!*\
  !*** ./client/src/services/request.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n}\n\nRequest.prototype.get = function(callback) {\n  const request = new XMLHttpRequest();\n  request.open(\"GET\", this.url);\n  request.addEventListener(\"load\", function(){\n    if(this.status !== 200){\n      return;\n    }\n    const responseBody = JSON.parse(this.responseText);\n    callback(responseBody);\n  });\n  request.send();\n};\n\nRequest.prototype.post = function(callback, body){\n  const request = new XMLHttpRequest();\n  request.open(\"POST\", this.url);\n  request.setRequestHeader(\"Content-Type\", \"application/json\");\n  request.addEventListener(\"load\", function(){\n    if(this.status !== 201){\n      return;\n    }\n    const responseBody = JSON.parse(this.responseText);\n    callback(responseBody);\n  });\n  request.send(JSON.stringify(body));\n}\n\nRequest.prototype.delete = function(callback){\n  const request = new XMLHttpRequest();\n  request.open(\"DELETE\", this.url);\n  request.addEventListener(\"load\", function(){\n    if(this.status !== 204){\n      return;\n    }\n    callback();\n  })\n  request.send();\n}\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/services/request.js?");

/***/ }),

/***/ "./client/src/views/bucketListView.js":
/*!********************************************!*\
  !*** ./client/src/views/bucketListView.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var BucketListView = function(){\n  this.bucketLists = [];\n}\n\nBucketListView.prototype.addCountry = function(country){\n  this.bucketLists.push(country);\n  this.render(country);\n}\n\nBucketListView.prototype.clear = function(){\n  this.bucketLists = [];\n}\n\nBucketListView.prototype.render = function(country){\n  const ul = document.querySelector('#countries');\n  const li = document.createElement('li');\n  li.innerText = country.name;\n  ul.appendChild(li);\n}\n\n\nmodule.exports = BucketListView;\n\n\n//# sourceURL=webpack:///./client/src/views/bucketListView.js?");

/***/ }),

/***/ "./client/src/views/countryListView.js":
/*!*********************************************!*\
  !*** ./client/src/views/countryListView.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var countryListView = function(){\n  this.countries = [];\n}\n\ncountryListView.prototype.showListOfCountries = function(countries){\n  console.log(countries);\n\n  let selectTag = document.getElementById('countryDropDown');\n\n  countries.forEach(function(country, index){\n    let option = document.createElement('option');\n    option.value = index;\n    option.innerText = country.name;\n    selectTag.appendChild(option);\n  });\n};\n\n\n//Copy to app.js\n// countryListView.prototype.handleSelected = function(countries){\n//   let selectTag = document.getElementById('countriesDropDown');\n//   selectTag.addEventListener('change', function(){\n//     const country = countries[this.value];\n//     console.log(country);\n//     bucketLists.render(country);\n//\n//     const coords = [country.latlng[0], country.latlng[1]];\n//     map.addMarker(coords);\n//   });\n// };\n\nmodule.exports = countryListView;\n\n\n//# sourceURL=webpack:///./client/src/views/countryListView.js?");

/***/ }),

/***/ "./client/src/views/mapWrapper.js":
/*!****************************************!*\
  !*** ./client/src/views/mapWrapper.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MapWrapper = function(containerID, coords, zoom) {\n  const osmLayer = new L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {\n\tattribution: 'Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a> &mdash; Map data &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>',\n\tsubdomains: 'abcd',\n\tminZoom: 1,\n\tmaxZoom: 16,\n\text: 'png'\n});\n  this.map = L.map(containerID).addLayer(osmLayer).setView(coords, zoom);\n}\n\nMapWrapper.prototype.currentLocation = function (coords) {\n  this.map.setView(coords);\n};\n\nMapWrapper.prototype.moveMap = function (coords) {\n this.map.flyTo(coords);\n};\n\nMapWrapper.prototype.addMarker = function(coords){\n  L.marker(coords).addTo(this.map);\n}\n\nmodule.exports = MapWrapper;\n\n\n//# sourceURL=webpack:///./client/src/views/mapWrapper.js?");

/***/ })

/******/ });