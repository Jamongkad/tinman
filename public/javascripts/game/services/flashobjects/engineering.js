angular.module('Engineering', [])
.service('Engineering', function($rootScope, $modal) { 
    function Engineering() { 
        this.desc = "Chief Engineer Andrew Wang (desc..)";
        this.name = "Chief Engineering Andrew Wang";
    }

    Engineering.prototype.status = function() {
        var modalInstance = $modal.open({
            templateUrl: '/convo/start'
          , controller: EngineeringCtrl 
        }); 
    }

    return new Engineering();
})

function EngineeringCtrl($scope, $modalInstance, $rootScope, $http) { 
    $scope.title = "Chief Engineer Andrew Wang";
    $scope.text = "<p>All is well sir.</p>";
}
