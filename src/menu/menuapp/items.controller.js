(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['itemsList'];

  function ItemsController (itemsList) {
    var items = this;

    console.log(itemsList);
    items.itemsList = itemsList.data['menu_items'];
  }
}());
