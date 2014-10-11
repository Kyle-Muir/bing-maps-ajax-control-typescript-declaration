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
    var geocodeRequestOptions = new Microsoft.Maps.Search.GeocodeRequestOptions();
    var location = new Microsoft.Maps.Location(1,1);
    geocodeRequestOptions.bounds = new Microsoft.Maps.LocationRect(location, 100, 100);
    var geocodeCallback = (geocodeResult: Microsoft.Maps.Search.GeocodeResult, userData: any) => { };
    geocodeRequestOptions.callback = geocodeCallback;
    geocodeRequestOptions.count = 10;
    var errorCallback = (geocodeRequestOptions: Microsoft.Maps.Search.GeocodeRequestOptions) => { };
    geocodeRequestOptions.errorCallback = errorCallback;
    geocodeRequestOptions.timeout = 3600;
    geocodeRequestOptions.userData = {};
    geocodeRequestOptions.where = '1 Microsoft Way';
}