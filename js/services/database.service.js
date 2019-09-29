(function () {
  'use strict';

  angular
    .module('database')
    .factory('databaseMock', databaseMock);

  function databaseMock () {
    return {
      contacts: getContacts(),
      carriers: getCarriers()
    };

    function getContacts () {
      return [
        {
          name: 'pedro faria',
          phone: '996475231',
          carrier: {
            name: 'Vivo',
            code: 15
          },
          data: new Date(),
          color: 'red'
        },
        {
          name: 'clara de castro',
          phone: '996872345',
          carrier: {
            name: 'Claro',
            code: 21
          },
          data: new Date(),
          color: 'green'
        },
        {
          name: 'mário fernandes',
          phone: '987956314',
          carrier: {
            name: 'Oi',
            code: 31
          },
          data: new Date(),
          color: 'pink'
        }
      ];
    }

    function getCarriers () {
      return [
        {
          name: 'Claro',
          code: 21,
          priceByHour: 2
        },
        {
          name: 'Oi',
          code: 31,
          priceByHour: 1.5
        },
        {
          name: 'TIM',
          code: 41,
          priceByHour: 3
        },
        {
          name: 'Vivo',
          code: 15,
          priceByHour: 2.5
        }
      ];
    }
  }
})();
