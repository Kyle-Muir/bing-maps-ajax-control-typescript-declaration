/// <reference path="Bing/Microsoft.Maps.All.d.ts"/>

var mapElementName: string = "mapElement";
var bingApiKey: string = "INVALID";

window.onload = () => {
    var el = document.getElementById(mapElementName);
    var map = new Microsoft.Maps.Map(el, bingApiKey);

    getPosition(map);
};

function getPosition(map: Microsoft.Maps.Map) {
    var positionOptions = { enableHighAccuracy: true, updateMapView: true, showAccuracyCircle: true };

    var loc = new Microsoft.Maps.GeoLocationProvider(map);
    loc.getCurrentPosition(positionOptions);
}