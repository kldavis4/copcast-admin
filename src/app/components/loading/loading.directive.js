'use strict';

var app = angular.module('copcastAdminApp');

app.directive('loading', function($timeout) {
  return {
    restrict: 'E',
    templateUrl: 'app/components/loading/loading.html',
    replace: true,
    scope: {
      users: '=ngModel',
      openOnLoad: '=?',
      onChangeUser: '&'
    },
    link: function(scope, el/*, attrs*/) {
      function initializeScope(scope) {
          scope.activations = 0;
          scope.timeout = null;
      }

      initializeScope(scope);

      angular.element('document').on('start-loading', function modalStartLoading() {
        if(scope.timeout) {
          $timeout.cancel(scope.timeout);
          scope.timeout = null;
        }

        scope.activations++;
        el.slideDown();
      });

      angular.element('document').on('stop-loading', function modalStopLoading() {
        if(scope.activations > 0) {
          scope.activations--;
        }

        if(scope.activations === 0 && !scope.timeout) {
          scope.timeout = $timeout(function modalLoadingTimeout() {
            el.slideUp();
            initializeScope(scope);
          }, 1000);
        }
      });
    }
  };
});
