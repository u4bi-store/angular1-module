var 
    app = angular.module("app", ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/A', {
      templateUrl: './A.html',
      controller: 'ctrlA'
    })
    .when('/B', {
      templateUrl: './B.html',
      controller: 'ctrlB'
    })
    .otherwise({
      redirectTo: '/B'
    });
}]);

app.controller('ctrlA', function($scope, Auth) {
  $scope.ctrl = "A 컨트롤러";

  if(Auth.check('admin') === 'good auth key') $scope.adminMenu = true;

  $scope.menu = function(){
      alert('메뉴를 클릭합니다');
  }

});

app.controller('ctrlB', function($scope, Auth) {
  $scope.ctrl = "B 컨트롤러";

  if(Auth.check('admin') === 'good auth key') return alert('이미 관리자');

  Auth.add('admin', 'good auth key');
  
  alert('인증을 하였습니다');

});


app.factory('Auth', Auth);

function Auth($cookieStore){
  return {
    add : add,
    check : check

  }
  
  function add(key, value){
    return $cookieStore.put(key, value);
  };

  function check(key){
    return $cookieStore.get(key);
  }  
}