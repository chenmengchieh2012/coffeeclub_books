var app = angular.module('coffeeclub_books', []);

app.run(function($rootScope) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) { 
        // handle route changes
        console.log(event); 
    });
});