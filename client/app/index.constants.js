(function () {
  'use strict';

  angular.module('bedSpaceManagement')
    /* global _: false, Favico: false */
    .constant('_', _)
    .constant('apiURL', 'http://localhost:8080')
    .constant('Favico', Favico);
})();
