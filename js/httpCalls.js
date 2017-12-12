var app = angular.module('servizi', []);


app.factory("getLista", function($http){
  return {
    fetchData: function(){
      return $http.get("http://jsonplaceholder.typicode.com/posts");
    }
  }
});
