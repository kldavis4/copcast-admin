;(function(angular, moment) {
  'use strict';

  var app = angular.module('copcastAdminApp');


  app.controller('HistoryCtrl', function ($scope, $q, $timeout, HistoryManager, userService, $routeParams) {

    $scope.manager = HistoryManager;

    HistoryManager.loadUsersAndGroups();

    HistoryManager.setCurrentUserId($routeParams.userId);

    $scope.initialPeriod = {
      fromDate: moment().add(-7, 'days').toDate(),
      toDate: moment().toDate(),
      period: true
    };

    $scope.showVideo = function(){
      return userService.isAdminTwo() || userService.isAdminThree();
    };
  });

})(window.angular, window.moment);
