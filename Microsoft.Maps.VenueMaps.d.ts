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
		error?: (errorCode: number, args: VenueMapCreationOptions) => void;

		/**
		*	The function to call if the venue map was successfully created. The function must accept two parameters: a VenueMap and an object that contains the arguments passed to the create method of the VenueMapFactory.
		**/
		success?: (venueMap: VenueMap, options: VenueMapCreationOptions) => void;

		/**
		*	A string that identifies the venue map to display.
		**/
		venueMapId? : string;
	}

	/**
	*	Contains methods for creating a venue map.
	**/
	export class VenueMapFactory {

		/**
    	*	Initializes a new instance of the VenueMapFactory class.
    	**/
		constructor (map: Map);

		/**
		*	Creates a venue map. If the venue map is created successfully, a VenueMap is returned to the function 
		*	specified in the success property of the VenueMapCreationOptions.
		*	
		*	You can display a venue map using the show method of the VenueMap Class.
		**/
		create(options: VenueMapCreationOptions): void;

		/**
		*	Searches for venue maps within a specified distance. The callback function must accept a NearbyVenue array.
		**/
		getNearbyVenues(options: NearbyVenueOptions): void;
	}

	/**
	*	Defines the shape of venue map entities.
	**/
	export class Polygon {

		/**
		*	The rectangle that defines the bounding box for the polygon.
		**/
		bounds: LocationRect;

		/**
		*	The center of the polygon.
		**/
		center: Location;

		/**
		*	The locations that define the vertices of the polygon.
		**/
		locations: Location[];
	}

	/**
	*	Represents a venue map primitive, which represents a venue map entity.
	**/
	export class Primitive {

		/**
		*	The rectangle that defines the bounding box for the primitive.
		**/
		bounds: LocationRect;

		/**
		*	The Yellow Pages ID for the entity.
		**/
		businessId: string;

		/**
		*	The Yellow Pages business category ID for the entity.
		**/
		categoryId: string;

		/**
		*	The Yellow Pages business category name for the entity.
		**/
		categoryName: string;

		/**
		*	The location of the center of the primitive.
		**/
		center: Location;

		/**
		*	The floor to which this primitive belongs.
		**/
		floor: Floor;

		/**
		*	The unique ID of the entity.
		**/
		id: string;

		/**
		*	An array of locations that represent the vertices of the primitive.
		**/
		locations: Location[];

		/**
		*	The name of the entity.
		**/
		name: string;

		/**
		*	Highlights the primitive.
		**/
		highlight(): void;

		/**
		*	Removes the highlighting of the primitive.
		**/
		unhighlight(): void;
	}

	/**
	*	Represents one floor map of a venue map.
	**/
	export class Floor {

		/**
		*	The name of the floor.
		**/
		name: string;

		/**
		*	An array of Primitive objects that represent the points of interest (for example, stores) on this venue floor.
		**/
		primitives: Primitive[];

		/**
		*	An array of doubles indicating the minimum and maximum zoom levels where imagery is available for this venue map floor.
		**/
		zoomRange: number[];
	}

	/**
	*	Represents the footprint of the venue map.
	**/
	export class Footprint {

		/**
		*	The shapes that make up the footprint of this venue.
		**/
		polygons: Polygon[];

		/**
		*	An array of doubles indicating the minimum and maximum zoom levels where imagery is available for this venue map.
		**/
		zoomRange: number[];
	}

	/**
	*	Represents a venue map directory, which is a list of businesses and features found within the venue.
	**/
	export class Directory {

		/**
		*	Adds the venue map directory to the DOM (document object model). The specified div becomes the parent element of the venue map directory. This method does nothing if the createUIElements is not called first.
		**/
		addToDom(div: HTMLElement, sortOrder: DirectorySortOrder, to_group_or_not: DirectoryGrouping): void;

		/**
		*	Creates the necessary UI elements and data structures to visualize the venue map directory. After this method is called, use the addToDOM method to add the elements to the DOM.
		**/
		createUIElements(): void;

		/**
		*	The base method to call if you override the click event.
		**/
		handleMouseClick(e: { eventArgs: MouseEventArgs; primitive: Primitive; }): void;

		/**
		*	The base method to call if you override the mouseout event.
		**/
		handleMouseMouseOut(e: { eventArgs: MouseEventArgs; primitive: Primitive; }): void;

		/**
		*	The base method to call if you override the mouseover event.
		**/
		handleMouseOver(e: { eventArgs: MouseEventArgs; primitive: Primitive; }): void;

		/**
		*	Returns a boolean indicating whether the venue map directory is in the DOM.
		**/
		isInDOM(): boolean;

		/**
		*	Removes the venue map directory from the DOM. It is recommended that you use this method to remove the venue map directory from the DOM instead of using the removeChild method of the DOM.
		**/
		removeFromDOM(): void;

		/**
		*	Sets the height of the venue map directory, as a percentage of the base map’s height or in absolute pixels. For example, to set the directory as 90% of the base map’s height, call setHeight(.9). To set the height as 800 pixels, call setHeight(800).
		**/
		setHeight(h: number): void;

		/**
		*	Occurs when the mouse is used to click a list item in the directory. If no handler is specified for this event, then the list item is selected.
		**/
		click: (eventArgs: MouseEventArgs, primitive: Primitive) => void;

		/**
		*	Occurs when the mouse cursor moves out of the area covered by a list item in the directory. If no handler is specified for this event, then the highlight is removed from the directory list item.
		**/
		mouseout: (eventArgs: MouseEventArgs, primitive: Primitive) => void;

		/**
		*	Occurs when the mouse is over a list item in the directory. If no handler is specified for this event, then the list item is highlighted.
		**/
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
