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

	var mouseArgs = { eventArgs: new Microsoft.Maps.MouseEventArgs(), primitive: new Microsoft.Maps.VenueMaps.Primitive() };
	directory.handleMouseClick(mouseArgs);
	directory.handleMouseMouseOut(mouseArgs);
	directory.handleMouseOver(mouseArgs);

	directory.click(new Microsoft.Maps.MouseEventArgs(), new Microsoft.Maps.VenueMaps.Primitive());
	directory.mouseout(new Microsoft.Maps.MouseEventArgs(), new Microsoft.Maps.VenueMaps.Primitive());
	directory.mouseover(new Microsoft.Maps.MouseEventArgs(), new Microsoft.Maps.VenueMaps.Primitive());
}
