(function () {
'use strict';


angular.module('Menuapp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService,categoriess) {

  var categorie = this;
  var promise = MenuDataService.GetAllCategories();

  promise.then(function (response) {
  categorie.categoriess= response.data;

  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });



}

})();
