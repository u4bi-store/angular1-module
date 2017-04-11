var 
    app = angular.module("app", ['ngCookies']);

app.controller('ctrl', function($scope, $cookieStore, $cookies) {

    $scope.data = {};

    console.log('$cookie', $cookies);
    console.log('$cookieStore', $cookieStore);

    console.log($cookies.getAll());

    add('u4bi', 'good data');
    select('u4bi');
    // remove('u4bi');

    /* 쿠기 저장 */
    function add(key, value){
        $cookieStore.put(key, value);

    };

    /* 쿠키 삭제 */
    function remove(key){
        $cookieStore.remove(key);

        delete $scope.data[key];
    };

    /* 쿠기 가져오기 */
    function select(key){
        $scope.data[key] = $cookieStore.get(key);

        $cookieStore.get(key);
    }

});