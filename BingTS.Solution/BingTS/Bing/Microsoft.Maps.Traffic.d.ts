/// <reference path="Microsoft.Maps.d.ts" />

/*
    NOTE: Before you can access the types found in the Microsoft.Maps.Traffic API, you must first load this module using the loadModule method.
*/
module Microsoft.Maps.Traffic {
    export class TrafficLayer {
        constructor (map: Map);

        getTileLayer(): TileLayer;
        hide(): void;
        show(): void;
    }
}