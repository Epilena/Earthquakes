var map = L.map('map').setView([40, -95], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);


d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson").then(data => {
console.log(data);

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

function pickSize(mag){

    if (mag === 0){
        return 1;
    }

    return magnitude *4;


}


function styleMarkers(feature){
    return{
        fillColor:pickColor(feature.geometry.coordinates[2]),
        radius:pickSize(feature.properties.mag)
        }
    }






    L.geoJSON(data,{


        
        pointToLayer: function(point, coords){
            return L.circleMarker(coords);
        },

        
        style:styleMarkers,


        onEachFeature: function(feature, layer){
            layer.bindPopup(feature.properties.mag);
            
        }
    
    
    }).addTo(map);
    
    })



