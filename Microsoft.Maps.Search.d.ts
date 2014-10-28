/// <reference path="Microsoft.Maps.All.d.ts" />
/**
*    This section contains reference documentation for the Microsoft.Maps.Search API, which contains types that allow you to return search and location results to display on your Bing Maps AJAX Control 7.0 map. Use the methods geocode, reverseGeocode, and search found on the @see SearchManager Class.
**/
declare module Microsoft.Maps.Search {

    /**
    *    Contains methods for returning search and location results.
    **/
    export class SearchManager {

        /**
        *    Initializes a new instance of the SearchManager class.
        **/
        constructor(map: Map);

        /**
        *    Matches the address or place query in the specified request options to a location and returns the results to the request options callback function.
        **/
        geocode(request: GeocodeRequestOptions): void;

        /**
        *    Matches the specified location to an address and returns the address results to the specified request options callback function.
        **/
        reverseGeocode(request: ReverseGeocodeRequestOptions): void;

        /**
        *    Performs a search based on the specified request options and returns the results to the request options callback function.
        **/
        search(request: SearchRequestOptions): void;
    }

    /**
    *   Represents an address.
    **/
    export class Address {
        /**
         *  The street line of an address. The addressLine property is the most precise, official line for an address relative to the postal agency servicing the area specified by the locality or postalCode properties. 
         **/
        addressLine: string;

        /**
         *  The subdivision name within the country or region for an address. This element is also commonly treated as the first order administrative subdivision. An example is a US state, such as “Oregon”.
         **/
        adminDistrict: string;

        /**
         *  The country or region name of the address.
         **/
        countryRegion: string;

        /**
         *  The second, third, or fourth order subdivision within a country, dependency, or region.
         **/
        district: string;

        /**
         *  The complete, unparsed address.
         **/
        formattedAddress: string;

        /**
         *  The locality, such as the primary city, that corresponds to an address. An example is “Seattle”.
         **/
        locality: string;

        /**
         *  The post code, postal code, or ZIP code of an address. An example is a US ZIP code, such as “98152”.
         **/
        postalCode: string;

        /**
         *  The city or neighborhood that corresponds to the postalCode.
         **/
        postalTown: string;
    }

    /**
    *    Contains options for a reverse geocode request.
    **/
    export interface ReverseGeocodeRequestOptions {
        
        /**
        *    The name of the function to call when a successful result is returned from the reverse geocode request. The callback function must accept two parameters: a result, which is a @see PlaceResult type, and a userData object.
        **/
        callback?: (result: PlaceResult, userData: any) => void;

        /**
        *    The name of the function to call when the request is returned with an error. The callback function must accept a @see ReverseGeocodeRequestOptions object.
        **/
        errorCallback?: (requestOptions: ReverseGeocodeRequestOptions) => void;

        /**
        *    The location to use to match to geographic entities and addresses.
        **/
        location?: Location;

        /**
        *    A number indicating how long to wait, in seconds, for the reverse geocode request to return. The default value is 5 seconds.
        **/
        timeout?: number;

        /**
        *    An object containing any data that needs to be passed to the callback when the request is completed.
        **/
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

       /**
     *  Contains the options for a geocode request.
     **/
    export interface GeocodeRequestOptions {

        /**
         *  A location rectangle that defines the boundaries of the area in which to search for location results. 
         *  The default is the bounds of the map view associated with this instance of the SearchManager, which is usually the current map view.
         **/
        bounds?: LocationRect;

        /**
         *  The name of the function to call when a successful result is returned from the geocode request. 
         *  The callback function must accept two parameters: result, which is a GeocodeResult type, and a userData object.
         **/
        callback?: (result: GeocodeResult, userData: any) => void;

        /**
         *  The maximum number of results to return. Required. The maximum number than can be returned is 20.
         **/
        count?: number;

        /**
         *  The name of the function to call when the request is returned with an error. The error callback function must accept a GeocodeRequestOptions object.
         **/
        errorCallback?: (requestOptions: GeocodeRequestOptions) => void;

        /**
         *  A number indicating how long to wait, in seconds, for the geocode request to return. The default value is 5 seconds.
         **/
        timeout?: number;

        /**
         *  An object containing any data that needs to be passed to the callback when the request is completed.
         **/
        userData?: any;

        /**
         *  A string containing the address or place to be matched to a location on the map. Required.
         **/
        where: string;
    }

    /**
     *  Represents a geocoded result.
     **/
    export class GeocodeResult {
        /**
         *  The parsed address of the input query.
         **/
        parsedAddress: Address;

        /**
         *  The parsed keyword string of the input query.
         **/
        parsedKeyword: string;

        /**
         *  The parsed separator of the input query.
         **/
        parsedSeparator: string;

        /**
         *  The geocoded results.
         **/
        results: PlaceResult[];
    }

    /**
    *    Represents a search request parse result.
    **/
    export class SearchParseResult {

        /**
        *    The keyword of the input query string.
        **/
        keyword: string;

        /**
        *    The geocoded location of the input query string.
        **/
        location: GeocodeLocation;

        /**
        *    The confidence of the geocode match.
        **/
        matchConfidence: MatchConfidence;
    }

    /**
    *    Represents a search area.
    **/
    export class SearchRegion {

        /**
        *    The address of the center of the search region.
        **/
        address: Address;

        /**
        *    The geocoded locations.
        **/
        geocodeLocations: GeocodeLocation[];

        /**
        *    The best geocoded location.
        **/
        explicitLocation: GeocodeLocation;

        /**
        *    A location rectangle that defines the boundaries of the search area.
        **/
        mapBounds: LocationRect;

        /**
        *    The match code of the geocoded location.
        **/
        matchCode: MatchCode;

        /**
        *    The match confidence of the geocoded location.
        **/
        matchConfidence: MatchConfidence;

        /**
        *    A string indicating the region used to infer the location. The current values are “Query” or “MapView”.
        **/
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
        hasMore: boolean;
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

    /**
    *    Represents a place result.
    **/
    export class PlaceResult {

        /**
        *    The location rectangle that defines the boundaries of the best map view of the place result.
        **/
        bestView: LocationRect;
        
        /**
        *    The geocoded location of the best result.
        *    KM 11/10/14 - PlaceResult.location actually returns a location, contrary to MSDN documentation.
        **/
        location: Location;

        /**
        *    The geocoded locations.
        **/
        locations: GeocodeLocation[];

        /**
        *    The match code of the best result.
        **/
        matchCode: MatchCode;

        /**
        *    The match confidence of the best result.
        **/
        matchConfidence: MatchConfidence;

        /**
        *    The name of the place result, if one exists.
        **/
        name: string;
    }

    /**
     *  Defines the confidence of the location match found by the geocoding service.
     **/
    export enum MatchConfidence {
        /**
         *  The confidence of the match is high.
         **/
        high,

        /**
         *  The confidence of the match is medium.
         **/
        medium,

        /**
         *  The confidence of the match is low.
         **/
        low,

        /**
         *  The confidence of the match is unknown.
         **/
        unknown
    }

    /**
     *  Defines the geocoding level of the location match found by the geocoder.
     **/
    export enum MatchCode {
        /**
         *  No match was found. 
         **/
        none,

        /**
         *  The match was good. 
         **/
        good,
        
        /**
         *  The match was ambiguous. Multiple results were returned. 
         **/
        ambiguous,

        /**
         *  The match was found by a broader search.
         **/
        upHeirarchy,

        /**
         *  The match was found, but possibly using a modified query.
         **/
        modified
    }

    /**
     *  Defines the match precision of a geocoded result.
     **/
    export enum LocationPrecision {
        /**
         *  The geocoding service matched the location to a point on the road using interpolation of multiple geocoded sources.
         **/
        interpolated,

        /**
         *  The geocoding service matched the location to the rooftop of a building.
         **/
        rooftop
    }

    /**
     *  Represents a geocode location.
     **/
    export class GeocodeLocation {

        /**
         *  The map location of this geocode location match. 
         **/
        location: Location;

        /**
         *  The name of this geocode location match. 
         **/
        name: string;

        /**
         *  The precision of this geocode location match.
         **/
        precision: LocationPrecision;
    }
}