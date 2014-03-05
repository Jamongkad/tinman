angular.module('Tactical', [])
.service('Tactical', function($rootScope, $modal, $http) { 
    function Tactical() { 

        this.desc = "Lieutenant Commander Klein Jenkins (desc...)";
        this.name = "Lieutenant Commander Klein Jenkins";
        this.topic_id = 0;
        this.conducting_search = false;

        var that = this;

        Tactical.prototype.order = function() { 
            that.topic_id = 6;
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: TacticalCtrl 
            }); 
        }

        Tactical.prototype.narration = function(id) { 
            $http.get('/narration/text/' + id + '/tactical').success(function(data) {
                $rootScope.$broadcast("push-message", data.text);    
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

        Tactical.prototype.ai = function() {
            return {
                "order": this.order
              //, "ship status": this.status
              , "weapons": this.weapons 
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

    if(Tactical.conducting_search == false) {
        $scope.load_dialog(Tactical.topic_id, $scope.officer, 1);          
    } else { 
        $scope.load_dialog(Tactical.topic_id, $scope.officer, 2);          
    }
    
    $scope.action = function(act, $event) {

        if(act.to_node == 0) {
            $modalInstance.close(); 
            
            if(Tactical.conducting_search == false) {
                Tactical.conducting_search = true;    
                Tactical.narration(2);
            }

        } else {
            $scope.load_dialog(act.to_node, $scope.officer, 1);     
        }
 
        $event.preventDefault();
    }
}
