'use strict';

/**
 * @ngdoc directive
 * @name pdc2015ResponsiveWebApp.directive:pdcTopMenu
 * @description
 * # pdcTopMenu
 */
angular.module('pdc2015ResponsiveWebApp')
  .directive('pdcTopMenu', ['$location', function(location) {
    return {
      templateUrl: '/views/partials/pdctopmenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.currentPage = location.path().substring(1).toLowerCase();
        scope.setPage = function(selectedPage){
          scope.currentPage = selectedPage;
        };
        //note: this uses the parent scope
        //element.text('this is the pdcTopMenu directive');
      }
    };
  }]);
