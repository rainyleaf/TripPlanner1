const mapboxgl = require("mapbox-gl");

function buildMarker(type, longitude, latitude){
    const types = {
        activity: 'http://i.imgur.com/WbMOfMl.png',
        hotel: 'http://i.imgur.com/D9574Cu.png',
        restaurant: 'http://i.imgur.com/cqR6pUI.png'
    }
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${types[type]})`;

    return new mapboxgl.Marker(markerDomEl).setLngLat([longitude, latitude])
    //.addTo(map);

}

module.exports = buildMarker;