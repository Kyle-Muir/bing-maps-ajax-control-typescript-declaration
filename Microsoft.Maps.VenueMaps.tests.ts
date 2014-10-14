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
