'use strict';

/**
 * @ngdoc directive
 * @name pdc2015ResponsiveWebApp.directive:pdcTopMenu
 * @description
 * # pdcTopMenu
 */
angular.module('pdc2015ResponsiveWebApp')
  .directive('pdcTopMenu', function () {
    return {
      templateUrl: '/views/directives/pdctopmenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the pdcTopMenu directive');
        
      }
    };
  });
