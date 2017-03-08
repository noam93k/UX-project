app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/time", {
        templateUrl : "time.html"
    })
    .when("/explain", {
        templateUrl : "explain.html"
    })
    .when("/done", {
        templateUrl : "done.html"
    });
});
