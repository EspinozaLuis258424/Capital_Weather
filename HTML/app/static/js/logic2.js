// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

url = "/graph3"


var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 4
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);
// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method

d3.json(url, function(data) {

//console.log(data)
for(let i = 0; i < data.length; i++){
  console.log(data[i]['City'])
  L.marker([data[i]['Lat'], data[i]['Lng']], {
    draggable: true,
    title: data[i]['City']
  }).bindPopup("<h1>" + data[i]['City']+ "</h1> <hr> <h3>Temp: " + data[i]['Temp'] + "</h3>").addTo(myMap);
  }

});
// Binding a pop-up to our marker
//marker.bindPopup("Hello There!");
// url = "/graph2"


// var myMap = L.map("map", {
//   center: [45.52, -122.67],
//   zoom: 13
// });

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);
// // Create a new marker
// // Pass in some initial options, and then add it to the map using the addTo method
// var cfg = {
//   // radius should be small ONLY if scaleRadius is true (or small radius is intended)
//   // if scaleRadius is false it will be the constant radius used in pixels
//   "radius": 2,
//   "maxOpacity": .8, 
//   // scales the radius based on map zoom
//   "scaleRadius": true, 
//   // if set to false the heatmap uses the global maximum for colorization
//   // if activated: uses the data maximum within the current map boundaries 
//   //   (there will always be a red spot with useLocalExtremas true)
//   "useLocalExtrema": true,
//   // which field name in your data represents the latitude - default "lat"
//   latField: 'lat',
//   // which field name in your data represents the longitude - default "lng"
//   lngField: 'lng',
//   // which field name in your data represents the data value - default "value"
//   valueField: 'count'
// };


// var heatmapLayer = new HeatmapOverlay(cfg);
// var map = new L.Map('map-canvas', {
//   center: new L.LatLng(25.6586, -80.3568),
//   zoom: 4,
//   layers: [baseLayer, heatmapLayer]
// });
// d3.json(url, function(data) {

// //console.log(data)
// for(let i = 0; i < data.length; i++){
//   console.log(data[i]['City'])
//   L.marker([data[i]['Lat'], data[i]['Lng']], {
//     draggable: true,
//     title: data[i]['City']
//   }).addTo(myMap);
//   }

// });
// Binding a pop-up to our marker
//marker.bindPopup("Hello There!");
