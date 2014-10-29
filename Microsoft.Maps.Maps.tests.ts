/// <reference path="Microsoft.Maps.All.d.ts" />

var test_events = () => {
	Microsoft.Maps.Events.addHandler({}, 'click', () => {});
	Microsoft.Maps.Events.addThrottledHandler({}, 'click', () => {}, 10);
	Microsoft.Maps.Events.hasHandler({}, 'click');
	Microsoft.Maps.Events.invoke({}, 'click', {});
	Microsoft.Maps.Events.removeHandler({});
}

var test_pixel_reference = () => {
	Microsoft.Maps.PixelReference.isValid(Microsoft.Maps.PixelReference.control);
}

var test_label_overlay = () => {
	Microsoft.Maps.LabelOverlay.isValid(Microsoft.Maps.LabelOverlay.hidden);
}

var test_altitude_reference = () => {
	Microsoft.Maps.AltitudeReference.isValid(Microsoft.Maps.AltitudeReference.ground);
}

var test_color = () => {
	var fromHex = Microsoft.Maps.Color.fromHex('#000000');
	var clone = Microsoft.Maps.Color.clone(fromHex);
	var color = new Microsoft.Maps.Color(1, 1, 1, 1);
	var clonedColor : Microsoft.Maps.Color = color.clone();
	var result : number = color.getOpacity();
	var hexValue : string = color.toHex();
	var stringValue : string = color.toString();
}

var test_coordinates = () => {
	var coordinates = new Microsoft.Maps.Coordinates();
	coordinates.accuracy = 1;
	coordinates.altitude = 1;
	coordinates.altitudeAccuracy = 1;
	coordinates.heading = 1;
	coordinates.latitude = 1;
	coordinates.longitude = 1;
	coordinates.speed = 1;
}