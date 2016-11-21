(function () {
'use strict';


angular.module('Menuapp')
.component('items', {
  templateUrl: 'src/menuApp/templates/items.component.template.html',
  bindings: {
    itemss: '<'
  }
});
})();
