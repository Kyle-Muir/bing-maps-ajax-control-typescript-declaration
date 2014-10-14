/// <reference path="Microsoft.Maps.All.d.ts" />

/**
*	Before you can access the types found in the Microsoft.Maps.VenueMaps API, you must first load this module using the loadModule method. Information about loading modules is in the Module Loading Methods topic.
**/
declare module Microsoft.Maps.VenueMaps {
	
	/** 
	*	Contains constants that specify how listings in a @see VenueMap directory are grouped.
	**/
	export class DirectoryGrouping {
		/**
		*	The listings in the directory are grouped by category.
		**/
		static byCategory: string;
		/**
		*	The listings in the directory are not grouped. They are displayed in a flat list.
		**/
		static none: string;
	}

	/**
	*	Contains constants that specify the way a venue map directory is sorted.
	**/
	export class DirectorySortOrder {
		/**
		*	The listings in the directory are sorted alphabetically.
		**/
		static alphabetical: string;
		/**
		*	The listings in the directory are sorted by floor.
		**/
		static byFloor: string;
	}

	/**
	*	Contains search options for retrieving nearby venue maps.
	**/
	export interface NearbyVenueOptions {

		/**
		*	The function to call when the search is completed. The function must accept an array of VenueMap objects.
		**/
		callback?: (venues: VenueMap[]) => void;
		
		/**
		*	The center of the circle in which to search for nearby venue maps.
		**/
		location?: Location;

		/**
		*	The base map.
		**/
		map?: Map;

		/**
		*	The radius, in meters, of the circle in which to search for nearby venue maps.
		**/
		radius?: number;
	}

	/**
	*	Contains options for creating a venue map.
	**/
	export interface VenueMapCreationOptions {
		
		/**
		*	The function to call if the venue map was not successfully created. The function must accept two parameters: an integer which is
		*	an error code and an object that contains the arguments passed to the create method of the VenueMapFactory.
		*
		*	The error codes are:
		*	1 - The metadata needed to create the venue map was not found because of a 404 or other web exception, or because the metadata was
		*		found but was empty.
		*	2 - The venue map metadata is invalid.
		*	3 - A timeout has occurred trying to retrieve the venue map metadata.
		**/
		error?: (errorCode: number, args: Microsoft.Maps.VenueMaps.VenueMapCreationOptions) => void;

		/**
		*	The function to call if the venue map was successfully created. The function must accept two parameters: a VenueMap and an object that contains the arguments passed to the create method of the VenueMapFactory.
		**/
		success?: (venueMap: Microsoft.Maps.VenueMaps.VenueMap, options: Microsoft.Maps.VenueMaps.VenueMapCreationOptions) => void;

		/**
		*	A string that identifies the venue map to display.
		**/
		venueMapId? : string;
	}

	export class VenueMapFactory {
		constructor (map: Map);

		create(options: VenueMapCreationOptions): void;
		getNearbyVenues(options: NearbyVenueOptions): void;
	}

	export class Polygon {
		bounds: LocationRect;
		center: Location;
		locations: Location[];
	}

	export class Primitive {
		bounds: LocationRect;
		businessId: string;
		categoryId: string;
		categoryName: string;
		center: Location;
		floor: Floor;
		id: string;
		locations: Location[];
		name: string;

		highlight(): void;
		unhighlight(): void;
	}

	export class Floor {
		name: string;
		primitives: Primitive[];
		zoomRange: number[];
	}

	export class Footprint {
		polygons: Polygon[];
		zoomRange: number[];
	}

	export class Directory {
		addToDom(div: HTMLElement, sortOrder: DirectorySortOrder, to_group_or_not: DirectoryGrouping): void;
		createUIElements(): void;
		handleMouseClick(e: { eventArgs: MouseEventArgs; primitive: Primitive; }): void;
		handleMouseMouseOut(e: { eventArgs: MouseEventArgs; primitive: Primitive; }): void;
		handleMouseOver(e: { eventArgs: MouseEventArgs; primitive: Primitive; }): void;
		isInDOM(): boolean;
		removeFromDOM(): void;
		setHeight(h: number): void;

		click: (eventArgs: MouseEventArgs, primitive: Primitive) => void;
		mouseout: (eventArgs: MouseEventArgs, primitive: Primitive) => void;
		mouseover: (eventArgs: MouseEventArgs, primitive: Primitive) => void;
	}

	export class Metadata {
		CenterLat: number;
		CenterLong: number;
		DefaultFloor: string;
		FloorHeader: string;
		Floors: Floor[];
		Footprint: Footprint;
		MapId: string;
		MapType: string;
		Name: string;
		YpId: string;
	}

	export class NearbyVenue {
		distance: number;
		metadata: Metadata;
	}

	export class VenueMap {
		address: string;
		bestMapView: ViewOptions;
		businessId: string;
		center: Location;
		defaultFloor: string;
		directory: Directory;
		floorHeader: string;
		floors: Floor[];
		footprint: Footprint;
		id: string;
		name: string;
		phoneNumber: string;
		type: string;

		dispose(): void;
		getActiveFloor(): string;
		hide(): void;
		setActiveFloor(floor: string): void;
		show(): void;

		click: (eventArgs: Primitive) => void;
		close: () => void;
		footprintclick: (eventArgs: Primitive) => void;
		mouseout: (eventArgs: Primitive) => void;
		mouseover: (eventArgs: Primitive) => void;
	}
}
