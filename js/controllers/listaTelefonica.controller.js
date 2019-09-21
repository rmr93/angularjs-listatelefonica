angular
  .module('listaTelefonica')
  .controller('listaTelefonicaCtrl', function ($scope) {
    $scope.appName = 'Lista Telefônica'
    $scope.contacts = [
      { name: 'pedro faria', phone: '996475231', carrier: { name: 'Vivo', code: 15 }, data: new Date(), color: 'red' },
      { name: 'clara de castro', phone: '996872345', carrier: { name: 'Claro', code: 21 }, data: new Date(), color: 'green' },
      { name: 'mário fernandes', phone: '987956314', carrier: { name: 'Oi', code: 31 }, data: new Date(), color: 'pink' }
    ]
    $scope.carriers = [
      { name: 'Claro', code: 21, priceByHour: 2 },
      { name: 'Oi', code: 31, priceByHour: 1.5 },
      { name: 'TIM', code: 41, priceByHour: 3 },
      { name: 'Vivo', code: 15, priceByHour: 2.5 }
    ]
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
