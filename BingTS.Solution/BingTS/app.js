var mapElementName = "mapElement";
var bingApiKey = "INVALID";
window.onload = function () {
    var el = document.getElementById(mapElementName);
    var map = new Microsoft.Maps.Map(el, bingApiKey);
    getPosition(map);
};
function getPosition(map) {
    var positionOptions = {
        enableHighAccuracy: true,
        updateMapView: true,
        showAccuracyCircle: true
    };
    var loc = new Microsoft.Maps.GeoLocationProvider(map);
    loc.getCurrentPosition(positionOptions);
}

