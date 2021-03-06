/// <reference path="Microsoft.Maps.All.d.ts" />

var test_directory_grouping = () => {
	Microsoft.Maps.VenueMaps.DirectoryGrouping.byCategory = 'byCategory';
	Microsoft.Maps.VenueMaps.DirectoryGrouping.none = 'none';
}

var test_directory_sort_order = () => {
	Microsoft.Maps.VenueMaps.DirectorySortOrder.alphabetical = 'alphabetical';
	Microsoft.Maps.VenueMaps.DirectorySortOrder.byFloor = 'byFloor';
}

var test_nearby_venue_options = () => {
	var map = new Microsoft.Maps.Map(document.createElement('div'));
	var callback: (venues: Microsoft.Maps.VenueMaps.VenueMap[]) => void;
	var nearbyVenueOptions : Microsoft.Maps.VenueMaps.NearbyVenueOptions = {
		callback: callback,
		location: new Microsoft.Maps.Location(1, 1),
		map: map,
		radius: 5
	};

	var nullNearbyVenueOptions : Microsoft.Maps.VenueMaps.NearbyVenueOptions = {	};
}

var test_venue_map_creation_options = () => {
	var error: (errorCode: number, args: Microsoft.Maps.VenueMaps.VenueMapCreationOptions) => void;
	var success: (venueMap: Microsoft.Maps.VenueMaps.VenueMap, options: Microsoft.Maps.VenueMaps.VenueMapCreationOptions) => void;

	var venueMapCreationOptions : Microsoft.Maps.VenueMaps.VenueMapCreationOptions = {
		error: error,
		success: success,
		venueMapId: 'venueMapId'
	};

	var venueMapCreationOptions : Microsoft.Maps.VenueMaps.VenueMapCreationOptions = {	};
}

var test_venue_map_factory = () => {
	var error: (errorCode: number, args: Microsoft.Maps.VenueMaps.VenueMapCreationOptions) => void;
	var success: (venueMap: Microsoft.Maps.VenueMaps.VenueMap, options: Microsoft.Maps.VenueMaps.VenueMapCreationOptions) => void;

	var map = new Microsoft.Maps.Map(document.createElement('div'));
	var venueMapFactory = new Microsoft.Maps.VenueMaps.VenueMapFactory(map);

	var createOptions : Microsoft.Maps.VenueMaps.VenueMapCreationOptions = {
		error: error,
		success: success,
		venueMapId: 'venueMapId'
	};

	venueMapFactory.create(createOptions);

	var callback: (venues: Microsoft.Maps.VenueMaps.VenueMap[]) => void;
	var nearbyVenueOptions : Microsoft.Maps.VenueMaps.NearbyVenueOptions = {
		callback: callback,
		location: new Microsoft.Maps.Location(1, 1),
		map: map,
		radius: 5
	};
	
	venueMapFactory.getNearbyVenues(nearbyVenueOptions);
}

var test_polygon = () => {
	var polygon : Microsoft.Maps.VenueMaps.Polygon = {
		bounds: new Microsoft.Maps.LocationRect(new Microsoft.Maps.Location(1, 1), 10, 50),
		center: new Microsoft.Maps.Location(1, 1),
		locations: [new Microsoft.Maps.Location(1, 1)]
	};
}

var test_primitive = () => {
	var primitive = new Microsoft.Maps.VenueMaps.Primitive();
	primitive.bounds = new Microsoft.Maps.LocationRect(new Microsoft.Maps.Location(1, 1), 10, 50);
	primitive.businessId = 'businessId';
	primitive.categoryId = 'categoryId';
	primitive.categoryName = 'categoryName';
	primitive.center = new Microsoft.Maps.Location(1, 1);
	primitive.floor = new Microsoft.Maps.VenueMaps.Floor();
	primitive.id = 'Id';
	primitive.locations = [new Microsoft.Maps.Location(1, 1)];
	primitive.name = 'name';

	primitive.highlight();
	primitive.unhighlight();
}

var test_floor = () => {
	var floor : Microsoft.Maps.VenueMaps.Floor = {
		name: 'name',
		primitives: [new Microsoft.Maps.VenueMaps.Primitive()],
		zoomRange: [14]
	};
}

var test_footprint = () => {
	var footprint : Microsoft.Maps.VenueMaps.Footprint = {
		polygons: [new Microsoft.Maps.VenueMaps.Polygon()],
		zoomRange: [16]
	};
}

var test_directory = () => {
	var directory = new Microsoft.Maps.VenueMaps.Directory();
	directory.addToDom(document.createElement('div'), 
					   Microsoft.Maps.VenueMaps.DirectorySortOrder.alphabetical, 
					   Microsoft.Maps.VenueMaps.DirectoryGrouping.byCategory);
	directory.createUIElements();
	directory.isInDOM();
	directory.removeFromDOM();
	directory.setHeight(50);
	var mouseEventArgs: Microsoft.Maps.MouseEventArgs = {
		getX: () => {
			return 1;
		},
		getY: () => {
			return 1;
		}
	};
	var mouseArgs = { eventArgs: mouseEventArgs, primitive: new Microsoft.Maps.VenueMaps.Primitive() };
	directory.handleMouseClick(mouseArgs);
	directory.handleMouseMouseOut(mouseArgs);
	directory.handleMouseOver(mouseArgs);

	directory.click(mouseEventArgs, new Microsoft.Maps.VenueMaps.Primitive());
	directory.mouseout(mouseEventArgs, new Microsoft.Maps.VenueMaps.Primitive());
	directory.mouseover(mouseEventArgs, new Microsoft.Maps.VenueMaps.Primitive());
}

var test_metadata = () => {
	var metadata : Microsoft.Maps.VenueMaps.Metadata = {
		CenterLatitude: 15,
		CenterLongitude: 30,
		DefaultFloor: 'DefaultFloor',
		FloorHeader: 'FloorHeader',
		Floors: [new Microsoft.Maps.VenueMaps.Floor()],
		Footprint: new Microsoft.Maps.VenueMaps.Footprint(),
		MapId: 'MapId',
		MapType: 'MapType',
		Name: 'Name',
		YpId: 'YpId'
	};
}

var test_nearby_venue = () => {
	var nearbyVenue : Microsoft.Maps.VenueMaps.NearbyVenue = {
		distance: 5,
		metadata: new Microsoft.Maps.VenueMaps.Metadata()
	};
}

var test_venue_map = () => {
	var venueMap = new Microsoft.Maps.VenueMaps.VenueMap();
	venueMap.address = 'address';
	var viewOptions : Microsoft.Maps.ViewOptions = { };
	venueMap.bestMapView = viewOptions;
	venueMap.businessId = 'businessId';
	venueMap.center = new Microsoft.Maps.Location(1, 1);
	venueMap.defaultFloor = 'defaultFloor';
	venueMap.directory = new Microsoft.Maps.VenueMaps.Directory();
	venueMap.floorHeader = 'floorHeader';
	venueMap.floors = [new Microsoft.Maps.VenueMaps.Floor()];
	venueMap.footprint = new Microsoft.Maps.VenueMaps.Footprint();
	venueMap.id = 'id';
	venueMap.name = 'name';
	venueMap.phoneNumber = 'phoneNumber';
	venueMap.type = 'type';

	venueMap.dispose();
	venueMap.getActiveFloor();
	venueMap.hide();
	venueMap.setActiveFloor('floor');
	venueMap.show();

	venueMap.click(new Microsoft.Maps.VenueMaps.Primitive());
	venueMap.close();
	venueMap.footprintclick(new Microsoft.Maps.VenueMaps.Primitive());
	venueMap.mouseout(new Microsoft.Maps.VenueMaps.Primitive());
	venueMap.mouseover(new Microsoft.Maps.VenueMaps.Primitive());
}
