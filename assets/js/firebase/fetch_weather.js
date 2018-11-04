fetch_weather = function($scope, $timeout, callback) {
    database.ref("weather").once("value").then(function(snapshot) {
        $timeout(function() {
            callback(snapshot);
        }, 0);
    });
};
