(function () {
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menu/menuapp/templates/items.template.html',
    controller: 'ItemsController as items',
    bindings: {
      itemsList: '<'
    }
  })
})();
