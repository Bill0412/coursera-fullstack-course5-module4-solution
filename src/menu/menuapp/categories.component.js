(function () {
  angular.module('MenuApp')
  .component('categoires', {
    templateUrl: 'src/menu/menuapp/templates/categories.template.html',
    bindings: {
      categoriesList: '<'
    }
  })
})();
