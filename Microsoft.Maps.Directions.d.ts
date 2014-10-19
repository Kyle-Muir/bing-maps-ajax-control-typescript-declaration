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
	*	Contains the arguments for directions events.
	**/
	export class DirectionsEventArgs {

		/**
		*	The route summary (or summaries) of the route(s) defined in the route property.
		**/
		routeSummary: RouteSummary[];

		/**
		*	The calculated route (or routes, if the route mode is transit).
		**/
		route: Route[];
	}

	/**
	*	Represents one direction in a set of route directions.
	**/
	export class DirectionsStep {
		
		/**
		*	The child direction items for this directions step.
		**/
		childItineraryItems: DirectionsStep[];

		/**
		*	The location of the start of the direction.
		**/
		coordinate: Location;

		/**
		*	The total distance of the step in the unit specified in the distanceUnit property of the @see DirectionsRequestOptions.
		**/
		distance: string;

		/**
		*	The total time, in seconds, of the direction step.
		**/
		durationInSeconds: number;

		/**
		*	The HTML formatted route instruction associated with the step.
		**/
		formattedText: string;

		/**
		*	The type of the icon associated with this step.
		**/
		iconType: IconType;

		/**
		*	A boolean indicating whether the maneuver image is a road shield image.
		**/
		isImageRoadShield: boolean;

		/**
		*	The maneuver type associated with this step.
		**/
		maneuver: Maneuver;

		/**
		*	The name of the maneuver image.
		**/
		maneuverImageName: string;

		/**
		*	The cost of the step.
		**/
		monetaryCost: number;

		/**
		*	An array of strings, where each string is a hint to help determine when to move to the next direction step. Not all direction steps have hints.
		**/
		postIntersectionHints: string[];

		/**
		*	An array of strings, where each string is a hint to help determine when you have arrived at this direction step. Not all direction steps have hints.
		**/
		preIntersectionHints: string[];

		/**
		*	The name of the transit stop where this step originates.
		**/
		startStopName: string;

		/**
		*	The transit line associated with this step.
		**/
		transitLine: TransitLine;

		/**
		*	The URL of the image to use for transit direction steps.
		**/
		transitStepIcon: string;

		/**
		*	The ID of the transit stop.
		**/
		transitStopId: string;

		/**
		*	The name of the transit line end.
		**/
		transitTerminus: string;

		/**
		*	An array of strings, where each string is a route warning associated with this step.
		**/
		warnings: DirectionsStepWarning[];
	}

	/**
	*	Represents a route direction warning, such as a traffic congestion warning.
	**/
	export class DirectionsStepWarning {

		/**
		*	The type of the route warning.
		**/
		style: StepWarningStyle;

		/**
		*	The warning text.
		**/
		text: string;
	}

	/**
	*	Contains disambiguation results for a waypoint geocoding request.
	**/
	export class Disambiguation {

		/**
		*	The possible business result matches for the originally specified waypoint address or location.
		**/
		businessSuggestions: BusinessDisambiguationSuggestion[];

		/**
		*	A boolean indicating whether there are more result suggestions available.
		**/
		hasMoreSuggestions: boolean;

		/**
		*	The disambiguation header text.
		**/
		headerText: string;

		/**
		*	The possible location result matches for the originally specified waypoint address or location.
		**/
		locationSuggestions: LocationDisambiguationSuggestion[];
	}


	/**
	*	Contains route maneuver types.
	**/
	export enum Maneuver {
		/**
		*	The step is not a maneuver.
		**/
		none = 0,

		/**
		*	The maneuver is unknown.
		**/
		unknown = 1,

		/**
		*	Depart from the start waypoint.
		**/
		departStart = 2,

		/**
		*	Depart from an intermediate stop point going in a different direction and on a different road than which you arrived.
		**/
		departIntermediateStop = 3,

		/**
		*	Depart from an intermediate stop point going back in the same direction and on the same road on which you arrived.
		**/
		departIntermediateStopReturning = 4,

		/**
		*	Arrive at the end waypoint.
		**/
		arriveFinish = 5,

		/**
		*	Arrive at an intermediate stop point.
		**/
		arriveIntermediateStop = 6,

		/**
		*	Turn left.
		**/
		turnLeft = 7,

		/**
		*	Turn right.
		**/
		turnRight = 8,

		/**
		*	Turn back sharply.
		**/
		turnBack = 9,

		/**
		*	Make a u-turn to go in the opposite direction.
		**/
		uTurn = 10,

		/**
		*	Turn left to stay on the same road.
		**/
		turnToStayLeft = 11,

		/**
		*	Turn right to stay on the same road.
		**/
		turnToStayRight = 12,

		/**
		*	Bear left.
		**/
		bearLeft = 13,

		/**
		*	Bear right.
		**/
		bearRight = 14,

		/**
		*	Keep left to stay on the same road.
		**/
		keepToStayLeft = 15,

		/**
		*	Keep right to stay on the same road.
		**/
		keepToStayRight = 16,

		/**
		*	Keep straight to stay on the same road.
		**/
		keepToStayStraight = 17,

		/**
		*	Keep left onto a different road.
		**/
		keepLeft = 18,

		/**
		*	Keep right onto a different road.
		**/
		keepRight = 19,

		/**
		*	Keep straight onto a different road.
		**/
		keepStraight = 20,

		/**
		*	Take the road. This instruction is used when you are entering or exiting a ferry.
		**/
		take = 21,

		/**
		*	Take the ramp to the left.
		**/
		takeRampLeft = 22,

		/**
		*	Take the ramp to the right.
		**/
		takeRampRight = 23,

		/**
		*	Stay straight to take the ramp.
		**/
		takeRampStraight = 24,

		/**
		*	Keep left and continue onto ramp.
		**/
		keepOnRampLeft = 25,

		/**
		*	Keep right and continue onto ramp.
		**/
		keepOnRampRight = 26,

		/**
		*	Keep straight and continue onto ramp.
		**/
		keepOnRampStraight = 27,

		/**
		*	Merge onto highway.
		**/
		merge = 28,

		/**
		*	Continue on the current road.
		**/
		continueRoute = 29,

		/**
		*	The road name changed.
		**/
		roadNameChange = 30,

		/**
		*	Enter a roundabout.
		**/
		enterRoundabout = 31,

		/**
		*	Exit a roundabout.
		**/
		exitRoundabout = 32,

		/**
		*	Turn right and then turn right.
		**/
		turnRightThenTurnRight = 33,

		/**
		*	Turn right and then turn left.
		**/
		turnRightThenTurnLeft = 34,

		/**
		*	Turn right and then bear right.
		**/
		turnRightThenBearRight = 35,

		/**
		*	Turn right and then bear left.
		**/
		turnRightThenBearLeft = 36,

		/**
		*	Turn left and then turn left.
		**/
		turnLeftThenTurnLeft = 37,

		/**
		*	Turn left and then turn right.
		**/
		turnLeftThenTurnRight = 38,

		/**
		*	Turn left and then bear left.
		**/
		turnLeftThenBearLeft = 39,

		/**
		*	Turn left and then bear right.
		**/
		turnLeftThenBearRight = 40,

		/**
		*	Bear right and then turn right.
		**/
		bearRightThenTurnRight = 41,

		/**
		*	Bear right and then turn left.
		**/
		bearRightThenTurnLeft = 42,

		/**
		*	Bear right and then bear right.
		**/
		bearRightThenBearRight = 43,

		/**
		*	Bear right and then bear left.
		**/
		bearRightThenBearLeft = 44,

		/**
		*	Bear left and then turn left.
		**/
		bearLeftThenTurnLeft = 45,

		/**
		*	Bear left and then turn right.
		**/
		bearLeftThenTurnRight = 46,

		/**
		*	Bear left and then bear right.
		**/
		bearLeftThenBearRight = 47,

		/**
		*	Bear left and then bear left.
		**/
		bearLeftThenBearLeft = 48,

		/**
		*	Take left ramp onto highway. This is part of a combined instruction.
		**/
		rampThenHighwayRight = 49,

		/**
		*	Take right ramp onto highway. This is part of a combined instruction.
		**/
		rampThenHighwayLeft = 50,

		/**
		*	Stay straight to take the ramp onto the highway. This is part of a combined instruction.
		**/
		rampToHighwayStraight = 51,

		/**
		*	Enter and exit a roundabout.
		**/
		enterThenExitRoundabout = 52,

		/**
		*	Bear instruction and then a merge instruction.
		**/
		bearThenMerge = 53,

		/**
		*	Turn instruction and then a merge instruction.
		**/
		turnThenMerge = 54,

		/**
		*	Bear instruction and then a keep instruction.
		**/
		bearThenKeep = 55,

		/**
		*	Transfer between public transit lines at a transit stop.
		**/
		transfer = 56,

		/**
		*	Wait at a transit stop.
		**/
		wait = 57,

		/**
		*	Take transit.
		**/
		takeTransit = 58,

		/**
		*	The maneuver is a walking instruction.
		**/
		walk = 59,

		/**
		*	Get on a public transit line at a transit stop.
		**/
		transitDepart = 60,

		/**
		*	Get off a public transit line at a transit stop.
		**/
		transitArrive = 61
	}

	/**
	*	Contains route icon types.
	**/
	export enum IconType {

		/**
		*	There is no route icon.
		**/
		none = 0,

		/**
		*	The icon is some other type of icon.
		**/
		other = 1,

		/**
		*	The icon is a car icon.
		**/
		auto = 2,

		/**
		*	The icon is a ferry icon.
		**/
		ferry = 3,

		/**
		*	The icon is a walking icon.
		**/
		walk = 4,

		/**
		*	The icon is a bus, or transit, icon
		**/
		bus = 5,

		/**
		*	The icon is a train icon.
		**/
		train = 6,

		/**
		*	The icon is an airline icon.
		**/
		airline = 7
	}

	/**
	*	Contains a possible result returned from geocoding a specified waypoint address or location.
	**/
	export class LocationDisambiguationSuggestion {

		/**
		*	The HTML formatted address suggestion.
		**/
		formattedSuggestion: string;

		/**
		*	The location of the suggestion.
		**/
		location: Location;

		/**
		*	The rooftop location of the suggestion.
		**/
		rooftopLocation: Location;

		/**
		*	The address suggestion.
		**/
		suggestion: string;
	}

	/**
	*	Represents a route.
	**/
	export class Route {

		/**
		*	The legs of the route. Each route leg represents the route between two waypoints.
		**/
		routeLegs: RouteLeg[];
	}

	/**
	*	Represents a leg of a route. A route leg is the part of the route between two stop waypoints.
	**/
	export class RouteLeg {

		/**
		*	The end time of the route leg. This property only applies when the routeMode of the @see DirectionsRequestOptions is set to transit.
		**/
		endTime: Date;

		/**
		*	The location of the last waypoint of this leg.
		**/
		endWaypointLocation: Location;

		/**
		*	The directions steps associated with this route leg.
		**/
		itineraryItems: DirectionsStep[];

		/**
		*	The index of the route to which this route leg belongs.
		**/
		originalRouteIndex: number;

		/**
		*	The start time of the route leg. This property only applies when the routeMode of the @see DirectionsRequestOptions is set to transit.
		**/
		startTime: Date;

		/**
		*	The location of the first waypoint of this route leg.
		**/
		startWaypointLocation: Location;

		/**
		*	The sub legs of this route leg. A sub leg of a route is the part of the route between a stop point and a via point or between two via points.
		**/
		subLegs: RouteSubLeg[];

		/**
		*	The summary which describes this route leg.
		**/
		summary: RouteSummary;
	}

	/**
	*	Represents the route line shape on the map.
	*	Tip: Use the setRenderOptions method of the @see DirectionsManager Class to set @see DirectionsRenderOptions to customize the look of the route line on the map.
	**/
	export class RoutePath {

		/**
		*	An array of latitudes, where each latitude is the latitude for one of the locations that define the route line.
		**/
		decodedLatitudes: number[];

		/**
		*	An array of longitudes, where each is the longitude value for one of the locations that define the route line.
		**/
		decodedLongitudes: number[];

		/**
		*	An array of regions that define, depending on the zoom level, how the route line should be rendered.
		**/
		decodedRegions: Object[];
	}

	/**
	*	Represents a route sub leg. A route sub leg is the part of the route between a stop point and a via point or between two via points. One or more sub legs make up a route leg.
	**/
	export class RouteSubLeg {

		/**
		*	The location of the last waypoint of the sub leg.
		**/
		actualEnd: Location;

		/**
		*	The location of the first waypoint of the sub leg.
		**/
		actualStart: Location;

		/**
		*	The description of the last waypoint of the sub leg.
		**/
		endDescription: string;

		/**
		*	The properties that define the route line of this sub leg on the map.
		**/
		routePath: RoutePath;

		/**
		*	The description of the first waypoint of the sub leg.
		**/
		startDescription: string;

		/**
		*	The summary of this route sub leg.
		**/
		summary: RouteSummary;
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

	/**
	*	Contains types of route direction warnings.
	**/
	export enum StepWarningStyle {
		/**
		*	The warning is just information about the route direction.
		**/
		info = 0,

		/**
		*	The warning is a minor warning, and may affect the route direction.
		**/
		minor = 1,

		/**
		*	The warning is a moderate warning and is likely to affect the route direction.
		**/
		moderate = 2,

		/**
		*	The warning is a major warning, and is highly likely to affect the route direction.
		**/
		major = 3,

		/**
		*	The warning indicates a congestion zone is being entered.
		**/
		ccZoneEnter = 4,

		/**
		*	The warning indicates a congestion zone is being exited.
		**/
		ccZoneExit = 5
	}

	/**
	*	Contains information about a transit line.
	**/
	export class TransitLine {
	 	
		/**
		*	The short name for the transit line.
		**/
	 	abbreviatedName: string;

	 	/**
	 	*	The ID of the agency that owns the transit line.
	 	**/
	 	agencyId: number;

	 	/**
	 	*	The name of the agency that owns the transit line.
	 	**/
	 	agencyName: string;

	 	/**
	 	*	The URL of the website of the agency that owns the transit line.
	 	**/
	 	agencyUrl: string;

	 	/**
	 	*	The color to use when rendering this transit line on the map.
	 	**/
	 	lineColor: Color;

	 	/**
	 	*	The color to use when rendering text associated with this transit line.
	 	**/
	 	lineTextColor: Color;

	 	/**
	 	*	Information about the provider of this transit line data.
	 	**/
	 	providerInfo: string;

	 	/**
	 	*	The full name of this transit line.
	 	**/
	 	verboseName: string;   
	}

	/**
	*	Represents a route waypoint.
	**/
	export class Waypoint {

		/**
		*	Initializes a new instance of the Waypoint class.
		**/
		constructor(options: WaypointOptions);

		/**
		*	Clears all options associated with this waypoint.
		**/
		clear(): void;

		/**
		*	Releases any resources associated with the waypoint.
		**/
		dispose(): void;

		/**
		*	Returns the address associated with the waypoint.
		**/
		getAddress(): string;

		/**
		*	Returns the business details associated with the waypoint.
		**/
		getBusinessDetails(): BusinessDetails;

		/**
		*	Returns the container element for the waypoint disambiguation list.
		**/
		getDisambiguationContainer(): HTMLElement;

		/**
		*	Returns the result of the waypoint geocoding disambiguation.
		**/
		getDisambiguationResult(): Disambiguation;

		/**
		*	Returns the location of the waypoint.
		**/
		getLocation(): Location;

		/**
		*	Returns the custom pushpin associated with this waypoint, if one has been specified.
		**/
		getPushpin(): Pushpin;

		/**
		*	Returns the short address for the waypoint.
		**/
		getShortAddress(): string;

		/**
		*	Returns a boolean indicating whether the waypoint location is the exact location.
		**/
		isExactLocation(): boolean;

		/**
		*	Returns a boolean value indicating whether the waypoint is a via point. A via point is a location that your route is guaranteed to pass through. There can be multiple via points between two stop points.
		**/
		isViapoint(): boolean;

		/**
		*	Sets options for the waypoint. For these options to take effect, you must recalculate the route.
		**/
		setOptions(options: WaypointOptions): void;


		/**
		*	Occurs when the any properties of the waypoint change or are updated.
		**/
		changed(waypointEventArgs: WaypointEventArgs);

		/**
		*	Occurs when a geocoding request for the waypoint’s address is made.
		**/
		geocoded(waypointEventArgs: WaypointEventArgs);

		/**
		*	Occurs when a reverse geocoding request for the waypoint’s location is made. This happens when no address is provided for the waypoint, or if the waypoint is dragged (in which case its location is changed).
		**/
		reverseGeocoded(waypointEventArgs: WaypointEventArgs);
	}


	/**
	*	Contains the arguments for route waypoint events.
	**/
	export interface WaypointEventArgs {

		/**
		*	The waypoint for which the event occurred.
		**/
		waypoint: Waypoint;
	}

	/**
	*	Contains waypoint options.
	**/
	export interface WaypointOptions {

		/**
		*	The address string, business name, or search string of the waypoint. For example, the following strings are valid for this parameter: “Seattle”, “Microsoft”, “pizza”, or “pizza Seattle”. Either the address or location property must be specified.
		**/
		address?: string;

		/**
		*	The business details of the waypoint, if it is a business.
		**/
		businessDetails?: BusinessDetails;

		/**
		*	The DOM element inside which the waypoint disambiguation list will be rendered. If this property is not set, the disambiguation list is rendered inside the itineraryContainer.
		**/
		disambiguationContainer?: HTMLElement;

		/**
		*	A boolean indicating whether the waypoint location is the exact location. The default value is false.
		**/
		exactLocation?: boolean;

		/**
		*	A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to true if you just want the route to pass through this location. The default value is false.
		**/
		isViapoint?: boolean;

		/**
		*	The location of the waypoint. Either the address or location property must be specified.
		**/
		location?: Location;

		/**
		*	The custom pushpin to use to represent this waypoint. This property overrides any pushpin options that apply to this waypoint that have been set in the @see DirectionsRenderOptions Object.
		**/
		pushpin?: Pushpin;

		/**
		*	The short address of the waypoint.
		**/
		shortAddress?: string;
	}
}