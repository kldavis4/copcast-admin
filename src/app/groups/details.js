'use strict';

/**
 * @ngdoc function
 * @name copcastAdminApp.controller:GroupsDetailsCtrl
 * @description
 * # GroupsDetailsCtrl
 * Controller of the copcastAdminApp
 */
angular.module('copcastAdminApp')
  .controller('GroupsDetailsCtrl', function($scope, $window, $routeParams, $http, $location, ServerUrl){
    $http.get(ServerUrl + '/groups/'+ $routeParams.id).success(function(data) {
      $window.console.log(data);
      $scope.group = data;
    }).error(function(data) {
      $scope.serverMessage = data;
    });

    $scope.updateGroup = function () {
      $http.post(ServerUrl + '/groups/' + $scope.group.id, $scope.group).success(function(){
        $location.path('/group-list');
      }).error(function(data) {
        $scope.serverMessage = data;
      });
    };

    $scope.back = function () {
      $location.path('/group-list');
    };
  });
