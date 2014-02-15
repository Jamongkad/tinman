angular.module('Ensign', [])
.service('Ensign', function($rootScope, $modal) { 
    function Ensign() { 
        this.desc = "Ensign Janine Watts (desc...)";
        this.name = "Ensign Janine Watts";
    }

    Ensign.prototype.status = function() { 
        var modalInstance = $modal.open({
            templateUrl: '/convo/start'
          , controller: EnsignCtrl 
        }); 
    }

    Ensign.prototype.order = function() { 
        var modalInstance = $modal.open({
            templateUrl: '/convo/start'
          , controller: EnsignCtrl 
        }); 
    }

    Ensign.prototype.ai = function() {
        return {
            "order": this.order
          , "ship status": this.status
        }     
    }

    return new Ensign();
})

function EnsignCtrl($scope, $modalInstance, $rootScope, $http) { 
    $scope.title = "Ensign Janine Watts";
    $scope.text = "<p>All is well sir.</p>";
}
