'use strict';

describe('Testing Modules', function(){
	describe('qwickeatsApp Module:', function() {

		// Before Each Test is run load the qwickeatsApp module
		var module;
		beforeEach(function()
		{
			module = angular.module('qwickeatsApp');
		});

		it('should be registed', function()
		{
			expect(module).not.toBe(null);
		});

		// Tests on the dependeicies of the module
		describe('Dependencies', function() {

			var deps;
			//This function 
			var hasModule = function(m){
				return deps.indexOf(m) >= 0;
			};

			// Not sure of what this line is doing
			beforeEach(function(){
				deps = module.value('qwickeatsApp').requires;
			});

			it('should have ngTouch as a dependency', function()
			{
				expect(hasModule('ngTouch')).toBe(true);
			});

			it('should have ngAnimate as a dependency', function()
			{
				expect(hasModule('ngAnimate')).toBe(true);
			});

			it('should have ngRoute as a dependency', function()
			{
				expect(hasModule('ngRoute')).toBe(true);
			});

			it('should have ngResource as a dependency', function()
			{
				expect(hasModule('ngResource')).toBe(true);
			});

			it('should have ngCookies as a dependency', function()
			{
				expect(hasModule('ngCookies')).toBe(true);
			});

			it('should have ngSanitize as a dependency', function()
			{
				expect(hasModule('ngSanitize')).toBe(true);
			});

			it('should not have xxx as a dependency', function()
			{
				expect(hasModule('xxx')).toBe(false);
			});
		});
	});
});
