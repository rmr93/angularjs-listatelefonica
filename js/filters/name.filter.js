angular
  .module('listaTelefonica')
  .filter('name', name)

function name () {
  const ignore = [
    'da', 'de', 'di', 'do'
  ]

  return function (input) {
    var listOfNames = input.split(' ')

    var output = listOfNames.map(function (name) {
      if (!ignore.includes(name)) {
        return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
      }
      return name
    }).join(' ')

    return output
  }
}
