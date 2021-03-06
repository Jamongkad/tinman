angular.module('Science', [])
.service('Science', function($rootScope, $modal) { 

    function Science() { 
        this.desc = "Science Officer Claire McAndrews (desc..)";
        this.name = "Science Officer Claire McAndrews";
    }
    
    Science.prototype.status = function() { 
        var modalInstance = $modal.open({
            templateUrl: '/convo/start'
          , controller: ScienceCtrl 
        }); 
    }

    return new Science();
})

function ScienceCtrl($scope, $modalInstance, $rootScope, $http) { 
    $scope.title = "Science Officer Claire McAndrews";
    $scope.text = "<p>All is well sir.</p>";
}
