'use strict';

describe('Service: geolocator', function () {

  // load the service's module
  beforeEach(module('qwickeatsApp'));

  // instantiate service
  var geolocator;

  beforeEach(inject(function (_geolocator_) {
    geolocator = _geolocator_;
  }));

  it('should contain an geolocator service', function() {
      expect(geolocator).toBeDefined();

      var latlon = {
             lat: 18.0159925,
             lon: -76.76255650000002
           };

      geolocator._geocodeAddress('11 Ottawa Avenue, Jamaica').then(function (result){
        expect(result).toEqual(latlon);
      });
    });

  it('should do something', function () {
    expect(!!geolocator).toBe(true);
  });

});
