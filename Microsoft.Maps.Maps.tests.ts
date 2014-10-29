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

var test_entity_collection = () => {
	var entity : Microsoft.Maps.TileLayer = new Microsoft.Maps.TileLayer({});
	var entityCollection = new Microsoft.Maps.EntityCollection();
	entityCollection.clear();
	entityCollection.get(1);
	entityCollection.getLength();
	entityCollection.getVisible();
	entityCollection.getZIndex();
	entityCollection.indexOf(entity);
	entityCollection.insert(entity, 1);
	entityCollection.pop();
	entityCollection.push(entity);
	entityCollection.remove(entity);
	entityCollection.removeAt(2);
	entityCollection.setOptions({options: {bubble: true}});
	entityCollection.toString();
	
	var object = {collection: entityCollection, entity: entity};
	entityCollection.entityadded(object);
	entityCollection.entitychanged(object);
	entityCollection.entityremoved(object);
}

var test_entity_collection_options = () => {
	var options : Microsoft.Maps.EntityCollectionOptions = {
		bubble: true,
		visible: true,
		zIndex: 2
	}

	var emptyOptions : Microsoft.Maps.EntityCollectionOptions = {
	}
}

var test_geo_location_provider = () => {
	var map = new Microsoft.Maps.Map(document.createElement('div'));
	var provider = new Microsoft.Maps.GeoLocationProvider(map);
	var location = new Microsoft.Maps.Location(1,1);
	provider.addAccuracyCircle(location, 2, 2, {showOnMap: false});
	provider.cancelCurrentRequest();
	provider.getCurrentPosition({enableHighAccuracy: true});
	provider.removeAccuracyCircle();
}

var test_infobox = () => {
	var location = new Microsoft.Maps.Location(1,1);
	var infoBox = new Microsoft.Maps.Infobox(location);
	var infoBoxWithOptions = new Microsoft.Maps.Infobox(location, {id: '1234', showPointer: true});
	var item: Object = infoBox.getActions();
	var point: Microsoft.Maps.Point = infoBox.getAnchor();
	var description: string = infoBox.getDescription();
	var height: number = infoBox.getHeight();
	var htmlContent: string = infoBox.getHtmlContent();
	var id: string = infoBox.getId();
	var returnedLocation: Microsoft.Maps.Location = infoBox.getLocation();
	var returnedPoint: Microsoft.Maps.Point = infoBox.getOffset();
	var options: Microsoft.Maps.InfoboxOptions = infoBox.getOptions();
	var showCloseButton: boolean = infoBox.getShowCloseButton();
	var showPointer: boolean = infoBox.getShowPointer();
	var title: string = infoBox.getTitle();
	var titleAction: Object = infoBox.getTitleAction();
	var titleClickHandler: Function = infoBox.getTitleClickHandler();
	var isVisible: boolean = infoBox.getVisible();
	var width: number = infoBox.getWidth();
	var zIndex: number = infoBox.getZIndex();
	infoBox.setHtmlContent('123456');
	infoBox.setLocation(location);
	infoBox.setOptions(options);
	var toString: string = infoBox.toString();

	var mouseEventArgs = new Microsoft.Maps.MouseEventArgs();
	infoBox.click(mouseEventArgs);
	infoBox.entitychanged(infoBox);
	infoBox.mouseenter(mouseEventArgs);
	infoBox.mouseleave(mouseEventArgs);
}

var test_infobox_options = () => {
	var location = new Microsoft.Maps.Location(1,1);
	var options: Microsoft.Maps.InfoboxOptions = {
		actions: {eventHandler: () => {}},
		description: 'description',
		height: 255,
		htmlContent: 'html content here',
		id: '1234',
		location: location,
		offset: new Microsoft.Maps.Point(1, 1),
		showCloseButton: true,
		showPointer: true,
		pushpin: new Microsoft.Maps.Pushpin(location),
		title: 'Title',
		titleAction: {eventHandler: () => {}},
		titleClickHandler: 'Title Click Handler',
		typeName: Microsoft.Maps.InfoboxType.mini,
		visible: true,
		width: 255,
		zIndex: 9001
	}	
}

var test_key_event_args = () => {
	var eventArgs : Microsoft.Maps.KeyEventArgs = {
		altKey: false,
		ctrlKey: true,
		eventName: 'click',
		handled: true,
		keyCode: '51',
		originalEvent: {},
		shiftKey: true
	}
}

var test_location = () => {
	var location = new Microsoft.Maps.Location(1,1);
	var locationWithAltitude = new Microsoft.Maps.Location(1,1,1,Microsoft.Maps.AltitudeReference.ground);
	var altitude: number = location.altitude;
	var altitudeReference: Microsoft.Maps.AltitudeReference = location.altitudeReference;
	var latitude: number = location.latitude;
	var longitude: number = location.longitude;

	var areEqual: boolean = Microsoft.Maps.Location.areEqual(location, locationWithAltitude);
	var normalizedLongitude : number = Microsoft.Maps.Location.normalizeLongitude(123);

	var clone : Microsoft.Maps.Location = location.clone();
	var locationAsString : string = location.toString();
}

var test_location_rect = () => {
	var location = new Microsoft.Maps.Location(1,1);
	var locationRect = new Microsoft.Maps.LocationRect(location, 200, 200);
	var center: Microsoft.Maps.Location = locationRect.center;
	var height: number = locationRect.height;
	var width: number = locationRect.width;
	var fromCorners : Microsoft.Maps.LocationRect = Microsoft.Maps.LocationRect.fromCorners(location, location);
	var fromEdges : Microsoft.Maps.LocationRect = Microsoft.Maps.LocationRect.fromEdges(1,1,1,1,1,Microsoft.Maps.AltitudeReference.ground);
	var fromLocationsWithList : Microsoft.Maps.LocationRect = Microsoft.Maps.LocationRect.fromLocations(location, location, location);
	var locations = [location, location, location];
	var fromLocationsWithArray : Microsoft.Maps.LocationRect = Microsoft.Maps.LocationRect.fromLocations(locations);
	var fromString : Microsoft.Maps.LocationRect = Microsoft.Maps.LocationRect.fromString('1,1,1,1');
	var clone : Microsoft.Maps.LocationRect = locationRect.clone();
	var contains : boolean = locationRect.contains(location);
	var getEast : number = locationRect.getEast();
	var getNorth : number = locationRect.getNorth();
	var getNorthwest : Microsoft.Maps.Location = locationRect.getNorthwest();
	var getSouth : number = locationRect.getSouth();
	var getSoutheast : Microsoft.Maps.Location = locationRect.getSoutheast();
	var getWest : number = locationRect.getWest();
	var intersects : boolean = locationRect.intersects(locationRect);
	var toString : string = locationRect.toString();
}