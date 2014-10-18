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

	/**
	*	Contains arguments for directions error events.
	**/
	export class DirectionsErrorEventArgs {

		/**
		*	The code which identifies the error that occurred.
		**/
		responseCode: RouteResponseCode;

		/**
		*	The error message.
		**/
		message: string;
	}

	/**
	*	Represents a route summary.
	**/
	export class RouteSummary {
		/**
		*	The total travel distance of the route, specified in the units set in the distanceUnit property of the @see DirectionsRequestOptions.
		**/
		distance: number;

		/**
		*	The cost of the route. This property is only returned if the routeMode of the @see DirectionsRequestOptions is set to transit and the map culture is set to ja-jp.
		**/
		monetaryCost: number;

		/**
		*	The location of the northeast corner of bounding box that defines the best map view of the route.
		**/
		northEast: Location;

		/**
		*	The location of the southwest corner of bounding box that defines the best map view of the route.
		**/
		southWest: Location;

		/**
		*	The total travel time, in seconds, for the route.
		**/
		time: number;

		/**
		*	The total travel time, in seconds, taking into account traffic delays, for the route. This property is 0 if the avoidTraffic property of the @see DirectionsRequestOptions is set to false.
		**/
		timeWithTraffic: number;
	}

	/**
	*	Contains response codes for a route calculation request.
	**/
	export enum RouteResponseCode {

		/**
		*	The route was successfully calculated.
		**/
		success = 0,

		/**
		*	An unknown error has occurred.
		**/
		unknownError = 1,

		/**
		*	A nearby road cannot be found for one or more of the route waypoints.
		**/
		cannotFindNearbyRoad = 2,

		/**
		*	The distance between two route waypoints, or the total length of the route exceeds the limit of the route mode. Modify the waypoint locations so that they are closer together.
		**/
		tooFar = 3,

		/**
		*	A route cannot be calculated for the specified waypoints. For example, this code is returned when a route between “Seattle, WA” and “Honolulu, HI” is requested.
		**/
		noSolution = 4,

		/**
		*	There is no route data for the specified waypoints.
		**/
		dataSourceNotFound = 5,

		/**
		*	There are no transit options available for the specified time.
		**/
		noAvailableTransitTrip = 7,

		/**
		*	The transit stops are so close that walking is always a better option.
		**/
		transitStopsTooClose = 8,

		/**
		*	The transit stops are so close that walking is a better option.
		**/
		walkingBestAlternative = 9,

		/**
		*	There is no transit data available for the route or for one or more of the specified waypoints, or the waypoints are in different transit areas that do not overlap.
		**/
		outOfTransitBounds = 10,

		/**
		*	The directions calculation request has timed out.
		**/
		timeout = 11,

		/**
		*	One or more waypoints need to be disambiguated. This error does not occur if the autoDisplayDisambiguation directions render option is set to true.
		**/
		waypointDisambiguation = 12,

		/**
		*	One or more waypoints do not have an address or location specified.
		**/
		hasEmptyWaypoint = 13,

		/**
		*	The maximum number of waypoints, which is 25, has been exceeded.
		**/
		exceedMaxWaypointLimit = 14,

		/**
		*	At least two waypoints are required to calculate a route.
		**/
		atleastTwoWaypointRequired = 15,

		/**
		*	The first or last waypoint is a via point, which is not allowed.
		**/
		firstOrLastStoppointIsVia = 16,

		/**
		*	The search service failed to return results.
		**/
		searchServiceFailed = 17,

		/**
		*	The credentials passed to the Directions module are invalid.
		**/
		invalidCredentials = 18
	}
}