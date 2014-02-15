angular.module('Comms', [])
.service('Comms', function($rootScope, $modal) { 
    function Comms() {
        this.desc = "Comms Officer Ray Dalton (desc..)";
        this.name = "Comms Officer Ray Dalton";
    }

    Comms.prototype.hailing = function() { 
        console.log("Hailing...");
    }

    Comms.prototype.speak = function() { 
        var modalInstance = $modal.open({
            templateUrl: '/convo/start'
          , controller: CommsCtrl 
        });
    }

    Comms.prototype.status = function() { 
        var modalInstance = $modal.open({
            templateUrl: '/convo/start'
          , controller:CommsCtrl 
        });
    }

    Comms.prototype.ai = function() {
        return {
            "talk": this.speak
          , "ship status": this.status
          , "hailing frequencies": this.hailing
        }     
    }

    return new Comms();
})

function CommsCtrl($scope, $modalInstance, $rootScope, $http) { 
    $scope.title = "Comms Officer Ray Dalton";        
    $scope.text = "<p>All is well sir.</p>";
}
