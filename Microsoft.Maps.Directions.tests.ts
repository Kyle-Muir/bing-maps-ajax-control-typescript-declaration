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