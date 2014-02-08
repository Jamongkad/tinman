angular.module('console', [])
.directive('consoleBox', function() {
    return {
        restrict: 'A'     
      , link: function(scope, element, attrs) {
        }
    }    
})
.directive('console', function($compile, $rootScope) { 
    return {
        restrict: 'E'     
      , scope: { m: "=m" }
      , controller: function($scope, $element, $attrs) { 
        }
      , link: function($scope, element, attrs) { 
            $scope.$watch('m', function(val) {
                element.html($scope.m.text);     
                $compile(element.contents())($scope.$parent);
            }); 

        }
    }
})
