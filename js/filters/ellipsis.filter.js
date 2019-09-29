(function () {
  'use strict';

  angular
    .module('listaTelefonica')
    .filter('ellipsis', ellipsis);

  function ellipsis () {
    return function (input, size) {
      if (input.length > size) {
        return input.substring(0, (size || 15)) + '...';
      }
      return input;
    };
  }
})();
