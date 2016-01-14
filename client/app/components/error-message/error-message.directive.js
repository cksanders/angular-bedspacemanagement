(function () {
  'use strict';

  angular.module('bedSpaceManagement')
    .directive('errorMessage', errorMessage);

  function errorMessage() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/error-message/error-message.html',
      scope: {
        errors: '=data'
      }
    };
  }

})();
