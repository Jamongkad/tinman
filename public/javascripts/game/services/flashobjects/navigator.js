angular.module('Navigator', [])
.service('Navigator', function($rootScope, $modal) { 
    function Navigator() { 
        this.desc = "Navigation Officer Anna Renkon (desc...)";
        this.name = "Navigation Officer Anna Renkon";
    }

    Navigator.prototype.status = function() {
        var modalInstance = $modal.open({
            templateUrl: '/convo/start'
          , controller: NavigatorCtrl 
        });
    }

    return new Navigator();
});

function NavigatorCtrl($scope, $modalInstance, $rootScope, $http) { 
    $scope.title = "Navigation Officer Anna Renkon";        
    $scope.text = "<p>All is well sir.</p>";
}
