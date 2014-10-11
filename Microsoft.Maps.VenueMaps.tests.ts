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