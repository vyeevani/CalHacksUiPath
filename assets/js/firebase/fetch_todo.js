fetch_todo = function($scope, $timeout, callback) {
    database.ref("todo").once("value").then(function(snapshot) {
        $timeout(function() {
            callback(snapshot);
        }, 0);
    });
};
