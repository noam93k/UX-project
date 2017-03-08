app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "time.htm"
    })
    .when("/green", {
        templateUrl : "explain.htm"
    })
    .when("/blue", {
        templateUrl : "done.htm"
    });
});
