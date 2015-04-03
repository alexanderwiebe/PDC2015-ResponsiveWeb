'use strict';

describe('Directive: pdcTopMenu', function () {

  // load the directive's module
  beforeEach(module('pdc2015ResponsiveWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pdc-top-menu></pdc-top-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pdcTopMenu directive');
  }));
});
