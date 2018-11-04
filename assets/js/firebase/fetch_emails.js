fetch_emails = function($scope, $timeout, callback) {
    database.ref("emails").once("value").then(function(snapshot) {
        $timeout(function() {
            callback(snapshot);
        }, 0);
    });
};
