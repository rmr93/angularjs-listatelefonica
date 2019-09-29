(function () {
  'use strict'

  angular
    .module('listaTelefonica')
    .controller('listaTelefonicaCtrl', function ($scope, databaseMock) {
      $scope.appName = 'Lista Telefônica'

      $scope.contacts = databaseMock.contacts
      $scope.carriers = databaseMock.carriers

      $scope.addContact = function (contact) {
        $scope.contacts.push(angular.copy(contact))
        delete $scope.contact
        $scope.formContact.$setPristine()
      }
      $scope.removeContacts = function (contacts) {
        $scope.contacts = contacts.filter(function (contact) {
          if (!contact.selected) return contact
        })
      }
      $scope.isSelectedContacts = function () {
        return $scope.contacts.some(function (contact) {
          return contact.selected
        })
      }
      $scope.orderBy = function (property) {
        $scope.orderByProperty = property
        $scope.orderByDirection = !$scope.orderByDirection
      }
    })
})()
