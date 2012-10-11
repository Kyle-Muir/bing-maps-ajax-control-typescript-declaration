
/*
    Contains types that allow you to return search and location results to display on your Bing Maps AJAX Control 7.0 map.
    Use the methods geocode, reverseGeocode, and search found on the SearchManager Class.
*/
module Microsoft.Maps.Search {

    export class SearchManager {
        constructor (map: Map);

        geocode(request: GeocodeRequestOptions): void;
        reverseGeocode(request: ReverseGeocodeRequestOptions): void;
        search(request: SearchRequestOptions): void;
    }

    /*
        Represents an address.
    */
    export class Address {
        /*
            The street line of an address. The addressLine property is the most precise, official line for an address relative
            to the postal agency servicing the area specified by the locality or postalCode properties.
        */
        addressLine: string;

        /*
            The subdivision name within the country or region for an address. This element is also commonly treated as the first
            order administrative subdivision. An example is a US state, such as “Oregon”.
        */
        adminDistrict: string;

        /*
            The country or region name of the address.
        */
        countryRegion: string;

        /*
            The second, third, or fourth order subdivision within a country, dependency, or region.
        */
        district: string;

        /*
            The complete, unparsed address.
        */
        formattedAddress: string;

        /*
            The locality, such as the primary city, that corresponds to an address. An example is “Seattle”.
        */
        locality: string;

        /*
            The post code, postal code, or ZIP code of an address. An example is a US ZIP code, such as “98152”.
        */
        postalCode: string;

        /*
            The city or neighborhood that corresponds to the postalCode.
        */
        postalTown: string;
    }

    export interface ReverseGeocodeRequestOptions {
        /*
            The name of the function to call when a successful result is returned from the reverse geocode request.
            The callback function must accept two parameters: a result, which is a PlaceResult type, and a userData object.
        */
        callback?: (result: PlaceResult, userData: any) => void;
        errorCallback?: (requestOptions: ReverseGeocodeRequestOptions) => void;
        location?: Location;
        timeout?: number;
        userData?: any;
    }

    export interface SearchRequestOptions {
        /*
            The name of the function to call when a successful result is returned from the search request. The callback
            function must accept two parameters: a result, which is a SearchResponse, and a userData object.
        */
        callback?: (result: SearchResponse, userData: any) => void;
        /*
            The maximum number of results to return. Required. The maximum number than can be returned is 20.
        */
        count?: number;
        /*
            The name of the function to call when the request is returned with an error. The callback function must accept
            a SearchRequestOptions object.
        */
        errorCallback?: (requestOptions: SearchRequestOptions) => void;

        /*
            The search string, such as “pizza in Seattle, WA”. Either query or what/where needs to be specified.
            If both are specified, an error occurs.
        */
        query?: string;

        /*
            The index of the first result in the results. For example, if you had already returned a first set of
            10 search results and now wanted to return the second set of 10 results, you would specify 10 as the
            startIndex and 10 as the count.
        */
        startIndex?: number;

        /*
            A number indicating how long to wait, in seconds, for the search request to return. The default value is 5 seconds.
        */
        timeout?: number;

        /*
            The type of entities to find. Currently only “Business” is allowed.
        */
        entityType?: string;

        /*
            An object containing any data that needs to be passed to the callback when the request is completed.
        */
        userData?: any;

        /*
            The business name, category, or other item for which the search is conducted. For example, “pizza” in the search
            string “pizza in Seattle”.
        */
        what?: string;

        /*
            The address or place name of the area for which the search is conducted. For example, “Seattle” in the searc
            string “pizza in Seattle”.
        */
        where?: string;
    }

    export class GeocodeRequestOptions {
        bounds: LocationRect;
        callback: (result: GeocodeResult, userData: any) => void;
        count: number;
        errorCallback: (requestOptions: GeocodeRequestOptions) => void;
        timeout: number;
        userData: any;
        where: string;
    }

    export class GeocodeResult {
        parsedAddress: Address;
        parsedKeyword: string;
        parsedSeparator: string;
        results: PlaceResult[];
    }

    export class SearchParseResult {
        keyword: string;
        location: GeocodeLocation;
        matchConfidence: MatchConfidence;
    }

    export class SearchRegion {
        address: Address;
        geocodeLocations: GeocodeLocation[];
        explicitLocation: GeocodeLocation;
        mapBounds: LocationRect;
        matchCode: MatchCode;
        matchConfidence: MatchConfidence;
        source: string;
    }

    export class SearchResponseSummary {
        authResultCode: number;
        copyright: string;
        errorMessage: string;
        statusCode: number;
        traceId: number;
    }

    export class SearchResponse {
        alternateSearchRegions: SearchRegion[];
        hasMore: bool;
        parseResults: SearchParseResult[];
        responseSummary: SearchResponseSummary;
        searchRegion: SearchRegion;
        searchResults: SearchResult[];
    }

    export class SearchResult {
        address: Address;
        city: string;
        country: string;
        entityType: string;
        hoursOfOperation: string;
        id: number;
        location: Location;
        name: string;
        phone: string;
        postalCode: string;
        reviewCount: number;
        userRating: number;
        website: string;
    }

    export class PlaceResult {
        bestview: LocationRect;
        location: GeocodeLocation;
        locations: GeocodeLocation[];
        matchCode: MatchCode;
        matchConfidence: MatchConfidence;
        name: string;
    }

    export class MatchConfidence {
        static high: string;
        static medium: string;
        static low: string;
        static unknown: string;
    }

    export class MatchCode {
        static none: string;
        static good: string;
        static ambiguous: string;
        static upHeirarchy: string;
        static modified: string;
    }

    export class LocationPrecision {
        /*
            The geocoding service matched the location to a point on the road using interpolation of multiple geocoded sources.
        */
        static interpolated: string;

        /*
            The geocoding service matched the location to the rooftop of a building.
        */
        static rooftop: string;
    }

    export class GeocodeLocation {
        location: Location;
        name: string;
        precision: LocationPrecision;
    }
}