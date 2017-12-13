var app = angular.module('esercizio', ["servizi", "ngTable", "ui.router"]);

app.controller('StoreController', function($scope, $http, getLista, NgTableParams){

  self = this;
  getLista.fetchData().success(function(data){
       self.tableParams = new NgTableParams({}, { dataset: data });
  })
});

app.config(function($stateProvider){
  var home = {
    name: 'main',
    url: '/',
    templateUrl: 'template/main.html',
    controller: "StoreController",
    controllerAs: "vm"
  }

  var inserimento = {
    name: 'inserimento',
    url: '/inserimento',
    templateUrl: 'template/inserimento.html'
  }

  $stateProvider.state(home);
  $stateProvider.state(inserimento);

});
