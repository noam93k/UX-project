app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/time", {
        templateUrl : "time.html"
    })
    .when("/explain", {
        templateUrl : "explain.htm"
    })
    .when("/done", {
        templateUrl : "done.htm"
    });
});
