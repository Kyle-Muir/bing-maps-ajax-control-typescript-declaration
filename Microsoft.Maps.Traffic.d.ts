/// <reference path="Microsoft.Maps.d.ts" />

/*
    NOTE: Before you can access the types found in the Microsoft.Maps.Traffic API, you must first load this module using the loadModule method.
*/
declare module Microsoft.Maps.Traffic {
	//NOTE: this class has been deprecated
    export class TrafficLayer {
        constructor (map: Map);

        getTileLayer(): TileLayer;
        hide(): void;
        show(): void;
    }

    export class TrafficManager {
    	constructor(map: Map);

    	hide(): void;
    	hideFlow(): void;
    	hideIncidents(): void;
    	hideLegend(): void;
    	show(): void;
    	showFlow(): void;
    	showIncidents(): void;
    	showLegend(): void;
    }
}