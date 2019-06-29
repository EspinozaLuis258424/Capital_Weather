// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

url = "/graph1"


var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13
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
  }).addTo(myMap);
  }

});
// Binding a pop-up to our marker
//marker.bindPopup("Hello There!");
