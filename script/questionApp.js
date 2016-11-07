var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {

		var resumePromise = $http.get("questions.json");

        resumePromise.success(function(data, status, headers, config) {
            $scope.questions = data;
            var id = "3";
            var myArray = $scope.questions.filter(function(value,i){
              return value.id === id;
            });

            console.log(myArray);
        });
        resumePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
        });
        
        

});