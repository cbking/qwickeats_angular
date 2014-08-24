'use strict';

describe('Service: geolocator', function () {

  // load the service's module
  beforeEach(module('qwickeatsApp'));

  // instantiate service
  var geolocator;
  beforeEach(inject(function (_geolocator_) {
    geolocator = _geolocator_;
  }));

  it('should do something', function () {
    expect(!!geolocator).toBe(true);
  });

});
