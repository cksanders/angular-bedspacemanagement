(function () {
  'use strict';

  angular.module('bedSpaceManagement')
    .run(logEvents);

  function logEvents($rootScope,
                     $jsonapi,
                     $log) {
    var events = [
      'resource:init',
      'resource:clearCache',
      'resource:initialize',
      'object:add',
      'object:update',
      'object:refresh',
      'object:remove',
      'object:link',
      'object:linkReflection',
      'object:unlink',
      'object:include',
      'object:unlinkReflection',
      'collection:fetch'
    ];

    var resources = $jsonapi.listResources();
    var watchers = [];

    angular.forEach(events, function (eventName) {
      angular.forEach(resources, function (resourceName) {
        logOnEvent(eventName, resourceName);
      });
    });

    function logOnEvent(eventName, resource) {
      var watcher = $rootScope.$on('angularJsonAPI:' + resource + ':' + eventName, function (event, status, object, response) {
        $log.info(resource, eventName, status, object, response);
      });

      watchers.push(watcher);
    }

    $rootScope.$on('$destroy', clearWatchers);

    function clearWatchers() {
      angular.forEach(watchers, function (watcher) {
        watcher();
      });
    }
  }
})();
