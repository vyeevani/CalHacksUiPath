var first_angular_cycle = 1;

angular.module('app.controllers.home', []).controller('homePageController', function($scope, $q, $timeout) {
    $scope.weather = {};
    $scope.emails = {};
    $scope.todos = {};

    if (first_angular_cycle) {
        first_angular_cycle = 0;
        console.log("Registering Firebase Listener Functions");
        weather_listener($scope, $timeout, function(snapshot) {
            fetch_weather($scope, $timeout, function(snapshot) {
                // Process the data recieved from the server using snapshot.val()
                $scope.weather = snapshot.val();
            });
        });

        emails_listener($scope, $timeout, function(snapshot) {
            fetch_emails($scope, $timeout, function(snapshot) {
                // Process the data recieved from the server using snapshot.val()
                $scope.emails = snapshot.val();
                console.log($scope.emails);
            });
        });

        todo_listener($scope, $timeout, function(snapshot) {
            fetch_todo($scope, $timeout, function(snapshot) {
                // Process the data recieved from the server using snapshot.val()
                $scope.todos = snapshot.val();
                console.log($scope.todos);
            });
        });
        console.log("Firebase listener registration completed");
    }

    $scope.delete_event = function(event_id) {
        delete_event(event_id);
    }

});
