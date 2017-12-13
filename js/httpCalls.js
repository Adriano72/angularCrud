var app = angular.module('servizi', []);


app.factory("getLista", function($http){
  return {
    fetchData: function(){
      return $http.get("https://randomuser.me/api/?results=500&nat=gb");
    }
  }
});
