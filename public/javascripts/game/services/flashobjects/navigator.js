angular.module('Navigator', [])
.service('Navigator', function($rootScope, $modal, $http) { 

    function Navigator() { 

        this.desc = "Navigation Officer Anna Renkon (desc...)";
        this.name = "Navigation Officer Anna Renkon";
        this.out_of_hyperspace = false;        
        this.topic_id = 0;

        var that = this;

        Navigator.prototype.status = function() {
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: NavigatorCtrl
            });        
        }

        Navigator.prototype.order = function() {
            that.topic_id = 1;
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: NavigatorCtrl
            });
        }

        Navigator.prototype.narration = function(id) { 
            $http.get('/narration/text/' + id + '/navigation').success(function(data) {
                $rootScope.$broadcast("push-message", data.text);    
            });
        }
        
        Navigator.prototype.ai = function() {
            return {
                "order": this.order
              //, "ship status": this.status
            }     
        }
    }

    return new Navigator();
});

function NavigatorCtrl($scope, $modalInstance, $rootScope, $http, Navigator) { 

    $scope.title = "Navigation Officer Anna Renkon";        
    $scope.officer = 'navigation';

    $scope.load_dialog = function(id, officer, group_id) { 
        $http.get('/convo/convo_start/' + id + '/' + officer + '/' + group_id).success(function(data) {
            $scope.data = data;
            for(i in data) {
                $scope.text = i;
                $scope.msg = data[i];
            }
        }); 
    }
    
    if(Navigator.out_of_hyperspace == false) {
        $scope.load_dialog(Navigator.topic_id, $scope.officer, 1);     
    } else { 
        $scope.load_dialog(Navigator.topic_id, $scope.officer, 2);     
    }
   
    $scope.action = function(act, $event) {

        if(act.to_node == 0) {
            $modalInstance.close();
            
            if(Navigator.out_of_hyperspace == false) {
                Navigator.out_of_hyperspace = true;     
                Navigator.narration(1);
            } 

        } else {
            $scope.load_dialog(act.to_node, $scope.officer, 1);     
        }
 
        $event.preventDefault();
    }
}
