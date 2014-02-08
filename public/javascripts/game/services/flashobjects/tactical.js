angular.module('Tactical', [])
.service('Tactical', function($rootScope, $modal) { 
    function Tactical() { 
        this.desc = "Lieutenant Commander Klein Jenkins (desc...)";
        this.name = "Lieutenant Commander Klein Jenkins";
    }

    Tactical.prototype.status = function() { 
        var modalInstance = $modal.open({
            templateUrl: '/convo/start'
          , controller: TacticalCtrl 
        }); 
    }


    return new Tactical();
})

function TacticalCtrl($scope, $modalInstance, $rootScope, $http) { 
    $scope.title = "Lieutenant Commander Klein Jenkins";
    $scope.text = "<p>All is well sir.</p>";
}
