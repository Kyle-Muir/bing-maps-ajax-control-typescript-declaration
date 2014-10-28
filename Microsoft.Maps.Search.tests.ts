/// <reference path="Microsoft.Maps.All.d.ts" />

var test_address = () => {
    var address = new Microsoft.Maps.Search.Address();
    address.addressLine = '12345';
    address.adminDistrict = '12345';
    address.countryRegion = '12345';
    address.district = '12345';
    address.formattedAddress = '12345';
    address.locality = '12345';
    address.postalCode = '90210';
    address.postalTown = 'Beverly Hills';
}

var test_geocode_location = () => {
    var geocodeLocation = new Microsoft.Maps.Search.GeocodeLocation();
    geocodeLocation.location = new Microsoft.Maps.Location(123, 55);
    geocodeLocation.name = 'Bahamas';
    geocodeLocation.precision = 1;
}

var test_geocode_request_options = () => {
    var geocodeRequestOptions : Microsoft.Maps.Search.GeocodeRequestOptions = {
        where: '1 Microsoft Way'
    };
    var location = new Microsoft.Maps.Location(1,1);
    geocodeRequestOptions.bounds = new Microsoft.Maps.LocationRect(location, 100, 100);
    var geocodeCallback = (geocodeResult: Microsoft.Maps.Search.GeocodeResult, userData: any) => { };
    geocodeRequestOptions.callback = geocodeCallback;
    geocodeRequestOptions.count = 10;
    var errorCallback = (geocodeRequestOptions: Microsoft.Maps.Search.GeocodeRequestOptions) => { };
    geocodeRequestOptions.errorCallback = errorCallback;
    geocodeRequestOptions.timeout = 3600;
    geocodeRequestOptions.userData = {};
}

var test_geocode_gesult = () => {
    var geocodeResult = new Microsoft.Maps.Search.GeocodeResult();
    geocodeResult.parsedAddress = new Microsoft.Maps.Search.Address();
    geocodeResult.parsedKeyword = '123';
    geocodeResult.parsedSeparator = '12345';
    geocodeResult.results = [];
}

var test_location_precision = () => {
    Microsoft.Maps.Search.LocationPrecision.interpolated = '123';
    Microsoft.Maps.Search.LocationPrecision.rooftop = '123';
}

var test_place_result = () => {
    var placeResult = new Microsoft.Maps.Search.PlaceResult();
    var location = new Microsoft.Maps.Location(1,1);
    placeResult.bestView = new Microsoft.Maps.LocationRect(location, 100, 100);
    placeResult.location = location;
    placeResult.locations = [new Microsoft.Maps.Search.GeocodeLocation()];
    placeResult.matchCode = Microsoft.Maps.Search.MatchCode.ambiguous;
    placeResult.matchConfidence = Microsoft.Maps.Search.MatchConfidence.high;
    placeResult.name = 'Kyle\'s Place';
}