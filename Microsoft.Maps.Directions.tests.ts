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

var test_directions_step = () => {
	var directionsStep = new Microsoft.Maps.Directions.DirectionsStep();
	var arrayOfDirectionSteps = [new Microsoft.Maps.Directions.DirectionsStep(), new Microsoft.Maps.Directions.DirectionsStep()];
	directionsStep.childItineraryItems = arrayOfDirectionSteps;
	directionsStep.distance = '12345';
	directionsStep.durationInSeconds = 1234;
	directionsStep.formattedText = '<html></html>';
	directionsStep.iconType = Microsoft.Maps.Directions.IconType.auto;
	directionsStep.isImageRoadShield = true;
	directionsStep.maneuver = Microsoft.Maps.Directions.Maneuver.turnLeft;
	directionsStep.maneuverImageName = 'Turn Left!';
	directionsStep.monetaryCost = 129.99;
	directionsStep.postIntersectionHints = ['Yolo', '1234'];
	directionsStep.preIntersectionHints = ['Yolo', '1234'];
	directionsStep.startStopName = 'Stop, hammer time.';
	var exampleTransitLine = new Microsoft.Maps.Directions.TransitLine();
	exampleTransitLine.abbreviatedName = '123';
	directionsStep.transitLine = exampleTransitLine;
	directionsStep.transitStepIcon = '12345';
	directionsStep.transitStopId = '54321';
	directionsStep.transitTerminus = 'Auckland, New Zealand';
	var directionsStepWarning = new Microsoft.Maps.Directions.DirectionsStepWarning();
	directionsStepWarning.style = Microsoft.Maps.Directions.StepWarningStyle.major;
	directionsStepWarning.text = 'Massive accident on the M1, avoid at all costs!';
	var warnings = [directionsStepWarning];
	directionsStep.warnings = warnings;
}

var test_route_path = () => {
	var routePath = new Microsoft.Maps.Directions.RoutePath();
	routePath.decodedLatitudes = [1,2,4.5];
	routePath.decodedLongitudes = [1,3,9.667];
	routePath.decodedRegions = [{}, {}, {item: 1234}];
}

var test_route_sub_leg = () => {
	var routeSubLeg = new Microsoft.Maps.Directions.RouteSubLeg();
	routeSubLeg.actualEnd = new Microsoft.Maps.Location(1,1);
	routeSubLeg.actualStart = new Microsoft.Maps.Location(1,1);
	routeSubLeg.endDescription = 'Yolo';
	routeSubLeg.routePath = new Microsoft.Maps.Directions.RoutePath();
	routeSubLeg.startDescription = 'HashSwag';
	routeSubLeg.summary = new Microsoft.Maps.Directions.RouteSummary();
}

var test_route_leg = () => {
	var routeLeg = new Microsoft.Maps.Directions.RouteLeg();
	routeLeg.endTime = new Date();
	routeLeg.endWaypointLocation = new Microsoft.Maps.Location(1, 1);
	routeLeg.itineraryItems = [new Microsoft.Maps.Directions.DirectionsStep()];
	routeLeg.originalRouteIndex = 1;
	routeLeg.startTime = new Date();
	routeLeg.startWaypointLocation = new Microsoft.Maps.Location(1, 1);
	routeLeg.subLegs = [new Microsoft.Maps.Directions.RouteSubLeg()];
	routeLeg.summary = new Microsoft.Maps.Directions.RouteSummary();
}

var test_route = () => {
	var route = new Microsoft.Maps.Directions.Route();
	route.routeLegs = [new Microsoft.Maps.Directions.RouteLeg()];
}