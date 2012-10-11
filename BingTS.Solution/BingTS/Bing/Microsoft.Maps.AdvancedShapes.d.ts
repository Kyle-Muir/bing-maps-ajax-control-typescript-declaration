/*
    Before you can access the types found in the Microsoft.Maps.AdvancedShapes API, you must first load this module using the loadModule method.
*/
module Microsoft.Maps.AdvancedShapes {

    /*
        The AdvancedShapes EntityCollection class differs from the base EntityCollection class in two ways:

        1)  When an entity of the collection fires an event, the event will fire for all entities of the collection.
            For example, if the mouseover event if fired for a pushpin in an entity collection, then the entity collection’s mouseover event is fired.

        2)  Setting the options of the entity collection sets the options of all its entities unless the entity collection option bubble is set to false.
            For example, by default, in an entity collection composed of multiple polygons, setting one polygon’s fill color to red changes the fill
            color of all of the other polygons in the entity collection to red.
    */
    export class EntityCollection implements Entity {
        /*
         * CONSTRUCTOR
         */

        /*
            Initializes a new instance of the EntityCollection class.
        */
        EntityCollection(options?: EntityCollectionOptions);

        /*
         * METHODS
         */

        /*
            Removes all entities from the collection.
        */
        clear(): void;
        get(index: number): Entity;
        getLength(): number;
        getVisible(): bool;
        getZIndex(): number;
        indexOf(entity: Entity): number;
        insert(entity: Entity, index: number): void;
        pop(): Entity;
        push(entity: Entity): void;
        remove(entity: Entity): Entity;
        removeAt(index: number): Entity;
        setOptions(options: EntityCollectionOptions): void;
        toString(): string;

        //Events
        entityAdded: (object: { collection: EntityCollection; entity: Entity; }) => any;
        entityChanged: (object: { collection: EntityCollection; entity: Entity; }) => any;
        entityRemoved: (object: { collection: EntityCollection; entity: Entity; }) => any;
    }

    export class Polygon implements Entity {
        /*
            Initializes a new instance of a complex Polygon. The locationsArrays array represents the polygon rings,
            where each element of the array is an array of Location objects that defines a ring. This constructor can
            be used to create a normal polygon, a multi-polygon, a polygon with holes, or a combination of polygons.
        */
        constructor (locationsArrays: Location[][], options?: PolygonOptions);

        getFillColor(): Color;
        getLocations(): Location[];
        getRings(): Location[][];
        getStrokeColor(): Color;
        getStrokeDashArray(): string;
        getStrokeThickness(): number;
        getVisible(): bool;
        setLocations(locations: Location[]): void;
        setOptions(options: PolylineOptions): void;
        toString(): string;

        click: (eventArgs: MouseEventArgs) => any;
        dbclick: (eventArgs: MouseEventArgs) => any;
        entitychanged: (entity: Entity) => any;
        mousedown: (eventArgs: MouseEventArgs) => any;
        mouseout: (eventArgs: MouseEventArgs) => any;
        mouseover: (eventArgs: MouseEventArgs) => any;
        mouseup: (eventArgs: MouseEventArgs) => any;
        rightclick: (eventArgs: MouseEventArgs) => any;
    }
}