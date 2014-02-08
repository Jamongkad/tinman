angular.module('Alien', [])
.service('Alien', function($rootScope, $modal) {

    function Alien() {

        this.desc = "Alien";
        this.name = "Alien";

        this.speak = function() {
 
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: AlienCtrl 
            });

            $rootScope.$broadcast("push-message", "Hailing alien ship captain...");
        }
 
    }

    return new Alien();
});

function AlienCtrl($scope, $modalInstance, $rootScope, $http) {

    $scope.title = "Alien Ship";        

    $scope.load_dialog = function(id) { 
        $http.get('/convo/convo_start/' + id).success(function(data) {
            $scope.data = data;
            for(i in data) {
                $scope.text = i;
                $scope.msg = data[i];
            }
        }); 
    }

    $scope.load_dialog(1);

    $scope.action = function(act, $event) {
        $scope.load_dialog(act.to_node);
        $event.preventDefault();
    }
}
