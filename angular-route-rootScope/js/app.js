var 
    app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/one', {
      templateUrl: './one.html'
    })
    .when('/two', {
      templateUrl: './two.html'
    })
    .otherwise({
      redirectTo: '/one'
    });
}]);

app.run(function($rootScope) {
  $rootScope.test = '전역값';

});

app.controller('ctrlA', function($scope, $rootScope) {
  $scope.ctrl = "A 컨트롤러 스코프값";

  console.log($rootScope.test); // 콘솔 테스트
});

app.controller('ctrlB', function($scope, $rootScope) {
  $scope.ctrl = "B 컨트롤러 스코프값";
  console.log($rootScope.test); // 콘솔 테스트
});