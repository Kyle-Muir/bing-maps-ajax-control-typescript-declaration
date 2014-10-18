/// <reference path="Microsoft.Maps.All.d.ts" />

var test_business_details = () => {
	var businessDetails = new Microsoft.Maps.Directions.BusinessDetails();

	businessDetails.businessName = 'Kyle\'s Bagels';
	businessDetails.entityId = '1234';
	businessDetails.phoneNumber = '555-5555';
	businessDetails.website = 'http://www.kyles-bagels.com';
}

var test_business_disambiguation_suggestion = () => {
	var businessDisambiguationSuggestion = new Microsoft.Maps.Directions.BusinessDisambiguationSuggestion();
	businessDisambiguationSuggestion.address = '1 Microsoft Way';
	businessDisambiguationSuggestion.distance = 1234;
	businessDisambiguationSuggestion.entityId = '123';
	businessDisambiguationSuggestion.index = 1;
	businessDisambiguationSuggestion.isApproximate = false;
	var fakeLocation  = new Microsoft.Maps.Location(1, 1);
	businessDisambiguationSuggestion.location = fakeLocation;
	businessDisambiguationSuggestion.name = 'Microsoft';
	businessDisambiguationSuggestion.phoneNumber = '1-800-MICROSOFT';
	businessDisambiguationSuggestion.rooftopLocation = fakeLocation;
	businessDisambiguationSuggestion.website = 'http://www.microsoft.com';
}

var test_directions_error_event_args = () => {
	var errorResponse : Microsoft.Maps.Directions.DirectionsErrorEventArgs = {
		responseCode: Microsoft.Maps.Directions.RouteResponseCode.invalidCredentials,
		message: 'Warning will robinson'
	}
}

var test_route_summary = () => {
	var routeSummary = new Microsoft.Maps.Directions.RouteSummary();
	routeSummary.distance = 1.2;
	routeSummary.monetaryCost = 1.5;	
	routeSummary.northEast = new Microsoft.Maps.Location(1, 1);	
	routeSummary.southWest = new Microsoft.Maps.Location(1, 1);	
	routeSummary.time = 123;
	routeSummary.timeWithTraffic = 123;
}

var test_transit_line = () => {
	var transitLine = new Microsoft.Maps.Directions.TransitLine();
	transitLine.abbreviatedName = '123';
	transitLine.agencyId = 123;
	transitLine.agencyName = 'Agency Name';
	transitLine.agencyUrl = 'http://fancypantsagency.com';
	transitLine.lineColor = new Microsoft.Maps.Color(1, 1, 1, 1);
	transitLine.lineTextColor = new Microsoft.Maps.Color(1, 1, 1, 1);
	transitLine.providerInfo = 'Povider information';
	transitLine.verboseName = 'Verbosity lives here';
}

var test_directions_step_warning = () => {
	var directionsStepWarning = new Microsoft.Maps.Directions.DirectionsStepWarning();
	directionsStepWarning.style = Microsoft.Maps.Directions.StepWarningStyle.major;
	directionsStepWarning.text = 'Massive accident on the M1, avoid at all costs!';
}