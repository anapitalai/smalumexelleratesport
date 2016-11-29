(function() {

  'use strict';

  angular
    .module('statusApp')
    .factory('Auth', AuthService);

  function AuthService($firebaseAuth) {
    var ref = new Firebase("https://gdglae.firebaseio.com");
    return $firebaseAuth(ref);
  }

})();