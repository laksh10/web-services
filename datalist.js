var app=angular.module("dataModule", ["ngRoute"]);
           
app.controller("dataCtrl", function($scope, $http){
 $http.get("json/datalist.json")
    .then(function(response) {
      console.log(response);

        $scope.names = response.data.GetCategoryResult;
    }); 
}); 

         app.config(function($routeProvider, $locationProvider){
                  
                  $routeProvider
                  
                  .when("/:eddi", {
                  	templateUrl:"display.html",
                     controller : "newCtrl"
                  })
               
                  
                  

                  $locationProvider.html5Mode(true);



});  

        app.controller("newCtrl", function($scope, $routeParams, $http){
          var eddi = $routeParams.eddi;
          $http({
          method : "POST",
          url : "http://162.17.231.114:121/SpinoService.svc/GetApprovedArticleList",
          data : {"category_url": eddi }
          }).then(function(response) {
          console.log(eddi);

          $scope.names = response.data.GetApprovedArticleListResult;
          });
        });






