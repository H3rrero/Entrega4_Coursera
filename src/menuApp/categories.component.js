(function () {
'use strict';


angular.module('Menuapp')
.component('categories', {
  templateUrl: 'src/menuApp/templates/categories.component.template.html',
  bindings: {
    categoriess: '<'
  }
});
})();
