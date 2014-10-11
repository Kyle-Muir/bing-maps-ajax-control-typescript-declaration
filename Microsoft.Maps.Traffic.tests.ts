/// <reference path="Microsoft.Maps.All.d.ts" />

function test_traffic_layer() {
	var map = new Microsoft.Maps.Map(document.createElement('div'));
	var trafficLayer = new Microsoft.Maps.Traffic.TrafficLayer(map);

	var tileLayer = trafficLayer.getTileLayer();
	trafficLayer.hide();
	trafficLayer.show();
}
