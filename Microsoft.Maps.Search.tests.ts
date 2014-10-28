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

var test_reverse_geocode_request_options = () => {
    var options : Microsoft.Maps.Search.ReverseGeocodeRequestOptions = {
        callback: (options : Microsoft.Maps.Search.PlaceResult, userData: any) => {},
        errorCallback: (options: Microsoft.Maps.Search.ReverseGeocodeRequestOptions) => {},
        location: new Microsoft.Maps.Location(1,1),
        timeout: 12,
        userData: {}
    }
}

var test_search_manager = () => {
    var map = new Microsoft.Maps.Map(document.createElement('div'));
    var manager = new Microsoft.Maps.Search.SearchManager(map);
    manager.geocode({where: '1 Microsoft Way'});
    manager.reverseGeocode({});
    manager.search({});
}

var test_search_parse_result = () => {
    var searchParseResult = new Microsoft.Maps.Search.SearchParseResult();
    searchParseResult.keyword = '123';
    searchParseResult.location = new Microsoft.Maps.Search.GeocodeLocation();
    searchParseResult.matchConfidence = Microsoft.Maps.Search.MatchConfidence.low;
}

var test_search_region = () => {
    var searchRegion = new Microsoft.Maps.Search.SearchRegion();
    searchRegion.address = new Microsoft.Maps.Search.Address();
    searchRegion.geocodeLocations = [new Microsoft.Maps.Search.GeocodeLocation()];
    searchRegion.explicitLocation = new Microsoft.Maps.Search.GeocodeLocation();
    var location = new Microsoft.Maps.Location(1,1);
    searchRegion.mapBounds = new Microsoft.Maps.LocationRect(location, 100, 100);
    searchRegion.matchCode = Microsoft.Maps.Search.MatchCode.ambiguous;
    searchRegion.matchConfidence = Microsoft.Maps.Search.MatchConfidence.low;
    searchRegion.source = 'Bing Maps API';
}

var test_search_request_options = () => {
    var searchRequestOptionsForQuery : Microsoft.Maps.Search.SearchRequestOptions = {
        callback: (result: Microsoft.Maps.Search.SearchResponse, userData: Object) => {},
        count: 20,
        errorCallback: (options: Microsoft.Maps.Search.SearchRequestOptions) => {},
        query: 'Seattle',
        startIndex: 10,
        timeout: 20,
        entityType: 'Business',
        userData: {}
    }

    var searchRequestOptionsForWhat : Microsoft.Maps.Search.SearchRequestOptions = {
        callback: (result: Microsoft.Maps.Search.SearchResponse, userData: Object) => {},
        count: 20,
        errorCallback: (options: Microsoft.Maps.Search.SearchRequestOptions) => {},
        startIndex: 10,
        timeout: 20,
        entityType: 'Business',
        userData: {},
        what: 'Pizza'
    }

    var searchRequestOptionsForWhere : Microsoft.Maps.Search.SearchRequestOptions = {
        callback: (result: Microsoft.Maps.Search.SearchResponse, userData: Object) => {},
        count: 20,
        errorCallback: (options: Microsoft.Maps.Search.SearchRequestOptions) => {},
        startIndex: 10,
        timeout: 20,
        entityType: 'Business',
        userData: {},
        where: '1 Microsoft Way'
    }
}

var test_search_response = () => {
    var searchResponse = new Microsoft.Maps.Search.SearchResponse();
    searchResponse.alternateSearchRegions = [new Microsoft.Maps.Search.SearchRegion()];
    searchResponse.hasMore = false;
    searchResponse.parseResults = [new Microsoft.Maps.Search.SearchParseResult()];
    searchResponse.responseSummary = new Microsoft.Maps.Search.SearchResponseSummary();
    searchResponse.searchRegion = new Microsoft.Maps.Search.SearchRegion();
    searchResponse.searchResults = [new Microsoft.Maps.Search.SearchResult()];
}