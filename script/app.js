var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {

		var resumePromise = $http.get("resume.json");

        resumePromise.success(function(data, status, headers, config) {
            $scope.resume = data;
        });
        resumePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
        });

});