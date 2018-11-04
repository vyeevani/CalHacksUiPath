weather_listener = function($scope, $timeout, callback) {
    database.ref("weather").on("value", function (snapshot) {
        $timeout(function() {
            callback(snapshot);
        }, 0);
    });
};
