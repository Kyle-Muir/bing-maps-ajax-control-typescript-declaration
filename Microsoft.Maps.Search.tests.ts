/// <reference path="Microsoft.Maps.All.d.ts" />

var test_address = () => {
    var address = new Microsoft.Maps.Search.Address();
    address.addressLine = '12345';
    address.adminDistrict = '12345';
    address.countryRegion = '12345';
    address.district = '12345';
    address.formattedAddress = '12345';
    address.locality = '12345';
    address.postalCode = '90210';
    address.postalTown = 'Beverly Hills';
}