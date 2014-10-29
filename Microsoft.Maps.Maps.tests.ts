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

	var mouseEventArgs: Microsoft.Maps.MouseEventArgs = {
		getX: () => {
			return 1;
		},
		getY: () => {
			return 1;
		}
	};
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

var test_map = () => {
	var map = new Microsoft.Maps.Map(document.createElement('div'));
	var mapWithMapOptions = new Microsoft.Maps.Map(document.createElement('div'), {credentials: 'YOURCREDENTIALSHERE', height: 400, width: 250});
	var mapWithViewOptions = new Microsoft.Maps.Map(document.createElement('div'), {animate: true, zoom: 13});
	var entites: Microsoft.Maps.EntityCollection = map.entities;
	var version: string = Microsoft.Maps.Map.getVersion();
	map.blur();
	map.dispose();
	map.focus();
	var bounds: Microsoft.Maps.LocationRect = map.getBounds();
	var center: Microsoft.Maps.Location = map.getCenter();
	var copyrights: string[] = map.getCopyrights((attributions: string[]) => {});
	map.getCredentials((credentials: string) => {});
	var heading: number = map.getHeading();
	var height: number = map.getHeight();
	var imageryId: string = map.getImageryId();
	var mapTypeId: string = map.getMapTypeId();
	var metersPerPixel: number = map.getMetersPerPixel();
	var mode: Microsoft.Maps.MapMode = map.getMode();
	var modeLayer: Node = map.getModeLayer();
	var options: Microsoft.Maps.MapOptions = map.getOptions();
	var pageX: number = map.getPageX();
	var pageY: number = map.getPageY();
	var rootElement: Node = map.getRootElement();
	var targetBounds: Microsoft.Maps.LocationRect = map.getTargetBounds();
	var targetCenter: Microsoft.Maps.Location = map.getTargetCenter();
	var targetHeading: number = map.getTargetHeading();
	var targetMetersPerPixel: number = map.getTargetMetersPerPixel();
	var targetZoom: number = map.getTargetZoom();
	var userLayer: Node = map.getUserLayer();
	var viewportX: number = map.getViewportX();
	var viewportY: number = map.getViewportY();
	var width: number = map.getWidth();
	var zoom: number = map.getZoom();
	var zoomRange: Object = map.getZoomRange();
	var isDownloadingTiles: boolean = map.isDownloadingTiles();
	var isMercator: boolean = map.isMercator();
	var isRotationEnabled: boolean = map.isRotationEnabled();
	map.setMapType('string');
	map.setOptions({});
	map.setView({});
	var location = new Microsoft.Maps.Location(1,1);
	var locationToPixelPoint: Microsoft.Maps.Point = map.tryLocationToPixel(location);
	var locationToPixelPointWithPixelReference: Microsoft.Maps.Point = map.tryLocationToPixel(location, Microsoft.Maps.PixelReference.control);
	var arrayOfLocations = [location];
	var locationToPixelArrayPoint: Microsoft.Maps.Point[] = map.tryLocationToPixel(arrayOfLocations);
	var locationToPixelArrayPointWithPixelReference: Microsoft.Maps.Point[] = map.tryLocationToPixel(arrayOfLocations, Microsoft.Maps.PixelReference.control);
	var point = new Microsoft.Maps.Point(1,1);
	var pixelToLocationPoint: Microsoft.Maps.Location = map.tryPixelToLocation(point);
	var pixelToLocationPointWithPixelReference: Microsoft.Maps.Location = map.tryPixelToLocation(point, Microsoft.Maps.PixelReference.control);
	var arrayOfPoints = [point];
	var pixelToLocationArrayPoint: Microsoft.Maps.Location[] = map.tryPixelToLocation(arrayOfPoints);
	var pixelToLocationArrayPointWithPixelReference: Microsoft.Maps.Location[] = map.tryPixelToLocation(arrayOfPoints, Microsoft.Maps.PixelReference.control);

	var mouseEventArgs: Microsoft.Maps.MouseEventArgs = {
		getX: () => {
			return 1;
		},
		getY: () => {
			return 1;
		}
	};
	var keyEventArgs : Microsoft.Maps.KeyEventArgs = {};

	map.click(mouseEventArgs);
	map.copyrightchanged();
	map.dblclick(mouseEventArgs);
	map.imagerychanged();
	map.keydown(keyEventArgs);
	map.keypress(keyEventArgs);
	map.keyup(keyEventArgs);
	map.maptypechanged();
	map.mousedown(mouseEventArgs);
	map.mousemove(mouseEventArgs);
	map.mouseout(mouseEventArgs);
	map.mouseover(mouseEventArgs);
	map.mouseup(mouseEventArgs);
	map.mousewheel(mouseEventArgs);
	map.optionschanged();
	map.rightclick(mouseEventArgs);
	map.targetviewchanged();
	map.tiledownloadcomplete();
	map.viewchange();
	map.viewchangeend();
	map.viewchangestart();
}

var test_map_mode_options = () => {
	var options: Microsoft.Maps.MapModeOptions = {
		shouldClipPolygons: true,
		drawShapesInSingleLayer: true
	};
}

var test_map_mode = () => {
	var mapMode = new Microsoft.Maps.MapMode();
	var drawShapesInSingleLayer: boolean = mapMode.getDrawShapesInSingleLayer();
	var shouldClipPolygons: boolean = mapMode.getShouldClipPolygons();
	mapMode.setOptions({shouldClipPolygons: true});
	mapMode.setViewChangeEndDelay(1000);
}

var test_map_options = () => {
	var options : Microsoft.Maps.MapOptions = {
		backgroundColor: new Microsoft.Maps.Color(1, 1, 1, 1),
		credentials: 'CREDENTIALSHERE',
		customizeOverlays: true,
		disableBirdseye: true,
		disableKeyboardInput: true,
		disableMouseInput: true,
		disablePanning: true,
		disableTouchInput: true,
		disableUserInput: true,
		disableZooming: true,
		enableClickableLogo: true,
		enableSearchLogo: true,
		fixedMapPosition: true,
		height: 123,
		inertiaIntensity: 123,
		showBreadcrumb: true,
		showCopyright: true,
		showDashboard: true,
		showMapTypeSelector: true,
		showScalebar: true,
		theme: {},
		tileBuffer: 123,
		useInertia: true,
		width: 123
	}
}

var test_mouse_event_args = () => {
	var mouseEventArgs: Microsoft.Maps.MouseEventArgs = {
		eventName: 'click',
		handled: true,
		isPrimary: true,
		isSecondary: true,
		isTouchEvent: true,
		originalEvent: {},
		pageX: 1,
		pageY: 1,
		target: {},
		targetType: 'target type',
		wheelDelta: 1,

		getX: () => {
			return 1;
		},
		getY: () => {
			return 1;
		}
	};
}

var test_point = () => {
	var point = new Microsoft.Maps.Point(1,1);
	var x: number = point.x;
	var y: number = point.y;
	var areEqual: boolean = Microsoft.Maps.Point.areEqual(point, point);
	var clone: Microsoft.Maps.Point = Microsoft.Maps.Point.clone(point);
	var returnedClone: Microsoft.Maps.Point = point.clone();
	var toString: string = point.toString();
}

var test_view_options = () => {
	var location = new Microsoft.Maps.Location(1,1);
	var locationRect = new Microsoft.Maps.LocationRect(location, 200, 200);
	var point = new Microsoft.Maps.Point(1,1);
	var viewOptions : Microsoft.Maps.ViewOptions = {
		animate: true,
		bounds: locationRect,
		center: location,
		centerOffset: point,
		heading: 1,
		labelOverlay: Microsoft.Maps.LabelOverlay.hidden,
		mapTypeId: '123',
		padding: 123,
		zoom: 123
	}
}

var test_tile_source_options = () => {
	var options : Microsoft.Maps.TileSourceOptions = {
		height: 100,
		uriConstructor: 'http://www.microsoft.com/maps/isdk/ajax/layers/lidar/{quadkey}.png',
		width: 100
	}
}

var test_tile_layer_options = () => {
	var options : Microsoft.Maps.TileLayerOptions = {
		animationDisplay: Microsoft.Maps.AnimationVisibility.auto,
		downloadTimeout: 5000,
		mercator: new Microsoft.Maps.TileSource({}),
		opacity: 3,
		visible: true,
		zIndex: 3
	}
}

var test_tile_layer = () => {
	var tileLayer = new Microsoft.Maps.TileLayer({});
	var options : Microsoft.Maps.TileLayerOptions = {
		animationDisplay: Microsoft.Maps.AnimationVisibility.auto,
		downloadTimeout: 5000,
		mercator: new Microsoft.Maps.TileSource({}),
		opacity: 3,
		visible: true,
		zIndex: 3
	}
	var tileLayerWithOptions = new Microsoft.Maps.TileLayer(options);
	var opacity: number = tileLayer.getOpacity();
	var tileSource: Microsoft.Maps.TileSource = tileLayer.getTileSource('123');
	var isVisible: boolean = tileLayer.getVisible();
	var zIndex: number = tileLayer.getZIndex();
	tileLayer.setOptions(options);
	var toString: string = tileLayer.toString();
}

var test_tile_source = () => {
	var tileSource = new Microsoft.Maps.TileSource({});
	var options : Microsoft.Maps.TileSourceOptions = {
		height: 100,
		uriConstructor: 'http://www.microsoft.com/maps/isdk/ajax/layers/lidar/{quadkey}.png',
		width: 100
	}
	var tileSourceWithOptions = new Microsoft.Maps.TileSource(options);
	var height: number = tileSource.getHeight();
	var uriConstructor: string = tileSource.getUriConstructor();
	var width: number = tileSource.getWidth();
	var toString: string = tileSource.toString();
}

var test_position_circle_options = () => {
	var positionCircleOptions : Microsoft.Maps.PositionCircleOptions = {
		polygonOptions: {fillColor: new Microsoft.Maps.Color(1,1,1,1)},
		showOnMap: true
	}
}