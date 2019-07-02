  
url = "/graph1"



// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(population) {
  return population*1000;
}

d3.json(url, function(data) {
 
  console.log(data);
 
  var heatArray = [];
 


    //console.log(data)
    for(let i = 0; i < data.length; i++){
  
      L.circle([data[i]['Lat'],data[i]['Lng']], {
        fillOpacity: 100,
        color: "white",
        fillColor: "purple",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(data[i]['Temp'])
      }).bindPopup("<h1>" + data[i]['City']+ "</h1> <hr> <h3>Temp: " + data[i]['Temp'] + "</h3>").addTo(myMap);
  
  
      // // console.log(data[i]['City'])
      // // L.marker([data[i]['Lat'], data[i]['Lng']], {
      // //   draggable: true,
      // //   title: data[i]['City']
      // // }).addTo(myMap);
      // console.log([data[i]['Lat'],data[i]['Lng'],]);
      // heatArray.push([data[i]['Lat'],data[i]['Lng'],data[i]['Temp']]);
    }
    });



// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  
}




