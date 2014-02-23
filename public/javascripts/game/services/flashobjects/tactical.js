angular.module('Tactical', [])
.service('Tactical', function($rootScope, $modal, $http) { 
    function Tactical() { 
        this.desc = "Lieutenant Commander Klein Jenkins (desc...)";
        this.name = "Lieutenant Commander Klein Jenkins";
        this.topic_id = 0;

        var that = this;

        Tactical.prototype.order = function() { 
            that.topic_id = 0;
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: TacticalCtrl 
            }); 
        }

        Tactical.prototype.status = function() { 
            that.topic_id = 0;
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: TacticalCtrl 
            }); 
        }

        Tactical.prototype.weapons = function() { 
            that.topic_id = 0;
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: TacticalCtrl 
            }); 
        }

        Tactical.prototype.sensors = function() { 
            that.topic_id = 6;
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: TacticalCtrl 
            }); 
        }

        Tactical.prototype.ai = function() {
            return {
                "order": this.order
              , "ship status": this.status
              , "weapons": this.weapons
              , "sensors": this.sensors
            }     
        }

    }

    return new Tactical();
})

function TacticalCtrl($scope, $modalInstance, $rootScope, $http, Tactical) { 
    $scope.title = "Lieutenant Commander Klein Jenkins";
    $scope.officer = 'tactical';

    $scope.load_dialog = function(id, officer, group_id) { 
        $http.get('/convo/convo_start/' + id + '/' + officer + '/' + group_id).success(function(data) {
            $scope.data = data;
            for(i in data) {
                $scope.text = i;
                $scope.msg = data[i];
            }
        }); 
    }

    console.log(Tactical.topic_id);
    
    $scope.load_dialog(Tactical.topic_id, $scope.officer, 1);     
   
    $scope.action = function(act, $event) {

        if(act.to_node == 0) {
            $modalInstance.close(); 
        } else {
            $scope.load_dialog(act.to_node, $scope.officer, 1);     
        }
 
        $event.preventDefault();
    }
}
