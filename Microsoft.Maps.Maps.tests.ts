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