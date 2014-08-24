'use strict';

describe('Directive: geolocator', function () {

  // load the directive's module
  beforeEach(module('qwickeatsApp'));

  var element,
    scope;
  // This needs to be there in order to load the view in my tests
  beforeEach(module('views/geolocator.html'));
  // Creates a new root scope
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
  

  // Test that the template directive is loading
  it('should load the templateUrl into the directive', inject(function ($compile) {
    element = angular.element('<geolocator></geolocator>');
    element = $compile(element)(scope);
    // Updates the directive with the right stuff
    scope.$digest();
    // Testing if the text of the element is not empty
    expect(element.text()).not.toBe(null);
  }));

  // Test that the template diretive is creating an input element
  it('an input element should loaded by the directive', inject(function($compile)
  {
    element = angular.element('<geolocator></geolocator>');
    element = $compile(element)(scope);
    scope.$digest();
    console.log(element.find('input')[0]);
    expect(element.find('input')[0]).not.toBeUndefined();

  }));

});
