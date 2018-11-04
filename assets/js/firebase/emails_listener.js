emails_listener = function($scope, $timeout, callback) {
    database.ref("emails").on("value", function (snapshot) {
        $timeout(function() {
            callback(snapshot);
        }, 0);
    });
};
