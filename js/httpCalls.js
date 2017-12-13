var app = angular.module('servizi', []);


app.factory("getLista", function($http){
  return {
    fetchData: function(){
      //return $http.get("https://randomuser.me/api/?results=500&nat=gb");
      return $http.get("http://127.0.0.1:9000/user");
    }
  }
});
