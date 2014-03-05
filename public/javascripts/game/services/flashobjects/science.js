angular.module('Science', [])
.service('Science', function($rootScope, $modal) { 

    function Science() { 
        this.desc = "Science Officer Claire McAndrews (desc..)";
        this.name = "Science Officer Claire McAndrews";
        this.topic_id = 0;

        var that = this;
         
        Science.prototype.order = function() { 
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: ScienceCtrl }); 
        }

        Science.prototype.analysis = function() { 
            that.topic_id = 10;
            var modalInstance = $modal.open({
                templateUrl: '/convo/start'
              , controller: ScienceCtrl 
            }); 
        }

        Science.prototype.ai = function() {
            return {
            //    "order": this.order
            //, "ship status": this.status
              "analysis": this.analysis
            }     
        }
    }
    

    return new Science();
})

function ScienceCtrl($scope, $modalInstance, $rootScope, $http, Science) { 
    $scope.title = "Science Officer Claire McAndrews";
    $scope.officer = "science";

    $scope.load_dialog = function(id, officer, group_id) { 
        $http.get('/convo/convo_start/' + id + '/' + officer + '/' + group_id).success(function(data) {
            $scope.data = data;
            for(i in data) {
                $scope.text = i;
                $scope.msg = data[i];
            }
        }); 
    }

    $scope.load_dialog(Science.topic_id, $scope.officer, 1);          

    $scope.action = function(act, $event) {

        if(act.to_node == 0) {
            $modalInstance.close();  
        } else {
            $scope.load_dialog(act.to_node, $scope.officer, 1);     
        }
 
        $event.preventDefault();
    }
}
