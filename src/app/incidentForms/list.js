'use strict';

/**
 * @ngdoc function
 * @name copcastAdminApp.controller:IncidentsListCtrl
 * @description
 * # IncidentsListCtrl
 * Controller of the copcastAdminApp
 */
angular.module('copcastAdminApp')
  .controller('IncidentsListCtrl', function ($scope, $http, $location, ServerUrl) {
    // callback for ng-click 'editIncident':
    $scope.viewIncident = function (incidentId) {
      $location.path('/incidentForms-view/' + incidentId);
    };

    $http.get(ServerUrl + '/incidentForms-list',
      { params : {
        page : $scope.page
      }
      }
    ).success(function(data) {
        $scope.incidentForms = data;
      }).error(function(data) {
        console.error(data);
      });

  });