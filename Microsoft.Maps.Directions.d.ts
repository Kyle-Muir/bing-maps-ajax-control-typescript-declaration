/// <reference path="Microsoft.Maps.d.ts" />

/**
*	NOTE: Before you can access the types found in the Microsoft.Maps.Directions API, you must first load this module using the loadModule method.
**/
declare module Microsoft.Maps.Directions {

	/**
	*	Contains business details for a waypoint.
	**/
	export class BusinessDetails {
		/**
		*	The business name of the waypoint.
		**/
		businessName: string;

		/**
		*	The Bing Maps entity ID of the business.
		**/
		entityId: string;

		/**
		*	The phone number of the business.
		**/
		phoneNumber: string;

		/**
		*	The URL of the business’ website.
		**/
		website: string;
	}

	/**
	*	Contains a possible business result returned from geocoding a specified waypoint address or location.
	**/
	export class BusinessDisambiguationSuggestion {
		/**
		*	The address of the business result.
		**/
		address: string;

		/**
		*	The distance of the business result from the originally specified waypoint address or location.
		**/
		distance: number;

		/**
		*	The Yellow Pages ID for the business.
		**/
		entityId: string;

		/**
		*	The index of this suggestion within the business suggestion array.
		**/
		index: number;

		/**
		*	A boolean indicating whether the result location is approximate.
		**/
		isApproximate: boolean;

		/**
		*	The location of the business suggestion.
		**/
		location: Location;

		/**
		*	The name of the business.
		**/
		name: string;

		/**
		*	The phone number of the business suggestion.
		**/
		phoneNumber: string;

		/**
		*	The URL of a photo of the business suggestion.
		**/
		photoUrl: string;

		/**
		*	The rooftop location of the business suggestion.
		**/
		rooftopLocation: Location;

		/**
		*	The URL of the business result’s website.
		**/
		website: string;
	}
}