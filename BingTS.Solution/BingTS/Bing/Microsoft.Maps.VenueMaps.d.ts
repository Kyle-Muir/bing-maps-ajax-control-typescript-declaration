/// <reference path="Microsoft.Maps.d.ts" />

module Microsoft.Maps.VenueMaps {
    export class DirectoryGrouping {
        static byCategory: string;
        static none: string;
    }

    export class DirectorySortOrder {
        static alphabetical: string;
        static byFloor: string;
    }

    export interface NearbyVenueOptions {
        callback?: (venues: VenueMap[]) => void;
        location?: Location;
        map?: Map;
        radius?: number;
    }

    export interface VenueMapCreationOptions {
        /*
            The function to call if the venue map was not successfully created. The function must accept two parameters: an integer which is
            an error code and an object that contains the arguments passed to the create method of the VenueMapFactory.

            The error codes are:
            1 - The metadata needed to create the venue map was not found because of a 404 or other web exception, or because the metadata was
                found but was empty.

            2 - The venue map metadata is invalid.

            3 - A timeout has occurred trying to retrieve the venue map metadata.
        */
        error?: (errorCode: number, args: VenueMapCreationOptions) => void;
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
        isInDOM(): bool;
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