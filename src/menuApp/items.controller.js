(function () {
'use strict';


angular.module('Menuapp')
.controller('ItemController', ItemController);


ItemController.$inject = ['$stateParams','MenuDataService'];
function ItemController($stateParams, MenuDataService) {
  var cont = this;


  var promise = MenuDataService.GetItemsForCategory($stateParams.shortCategorie);

  promise.then(function (response) {
  cont.itemss = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
}

})();
