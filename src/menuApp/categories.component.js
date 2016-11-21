(function () {
'use strict';


angular.module('Menuapp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories.component.template.html',
  bindings: {
    categoriess: '<'
  }
});
})();
