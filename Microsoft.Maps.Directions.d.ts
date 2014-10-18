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
}