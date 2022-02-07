//map token
var map = L.map('map').setView([40, -95], 3);

//tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);

//get request to url to geoJSON 
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson").then(data => {
console.log(data);

//create geoJSON layer 
L.geoJSON(data,{


    pointToLayer: function(point, coords){
        return L.circleMarker(coords, pickSize(magnitude));
    },

    style:styleMarkers,

    //pop up for additional information 
    onEachFeature: function(feature, layer){
        layer.bindPopup("Magnitude: "+ feature.properties.mag + "<br>Location: " + feature.properties.place);
        
    }


 }).addTo(map);



function pickColor(depth) {

    switch (depth) {

        case depth > 500:
            return "#005F73";
        case depth > 300:
            return "#0A9396";
        case depth > 100:
            return "#E9D8A6"

        default: return "#001219"
    }

}
//set radius for magnitude
function pickSize(magnitude){

    if (mag === 0){
        return 1;
    }

    return magnitude *4;


}

// function to make style of marker
function styleMarkers(feature){
    return{
        opacity: 1,
        fillOpacity: 1,
        fillColor:pickColor(feature.geometry.coordinates[2]),
        radius:pickSize(feature.properties.mag),
        stroke: true,
        weight: 0.5
        }
    }

    //creation of legend
function mapLegend (map){

}
    
    });


