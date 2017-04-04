/*  NOTES:
*
*   Retina tile request
*  'http://{s}.basemaps.cartocdn.com/{basemap-name}/{z}/{x}/{y}@2x.png'
*
*   HTTPS tile request
*  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/{basemap-name}/{z}/{x}/{y}.png'
*/


loadMap();

//LEAFLET BASE MAPS
function loadMap(){

  // set map init view, load layers
  var map = L.map('map', {
      center: [49.1951, 16.6068],
      zoom: 13,
  });

  // base layers
  var attrib = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'

  // light
  var lightURL = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
  var light = new L.tileLayer(lightURL, {attribution: attrib}).addTo(map) //default layer

  // light with no labels
  var lightNoLabelsURL = 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
  var lightNoLabels = new L.tileLayer(lightNoLabelsURL, {attribution: attrib})

  // dark
  var darkURL = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
  var dark = new L.tileLayer(darkURL, {attribution: attrib})

  // dark with no labels
  var darkNoLabelsURL = 'http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png'
  var darkNoLabels = new L.tileLayer(darkNoLabelsURL, {attribution: attrib})

  // osm
  var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  var osm = new L.tileLayer(osmURL, {attribution: attrib})

  // layer switcher names
  var baseLayers = {
    'light': light,
    'dark': dark,
    'osm': osm,
  };
  var overlays = {
    /*
    'light plain': lightNoLabels,
    'dark plain': darkNoLabels,
    */
  };
  var options = {
    'position': 'bottomleft',
  };

  // add scale
  L.control.scale().addTo(map);
  // add layer switcher
  L.control.layers(baseLayers, overlays, options).addTo(map);
}
