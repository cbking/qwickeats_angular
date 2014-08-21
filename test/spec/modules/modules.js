'use strict';

describe('Testing Modules', function(){
	describe('qwickeatsApp Module:', function() {

		var module;
		beforeEach(function()
		{
			module = angular.module('qwickeatsApp');
		});

		it('should be registed', function()
		{
			expect(module).not.toBe(null);
		});
	});

});
