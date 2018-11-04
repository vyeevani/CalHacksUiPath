todo_listener = function($scope, $timeout, callback) {
    database.ref("todo").on("value", function (snapshot) {
        $timeout(function() {
            callback(snapshot);
        }, 0);
    });
};
