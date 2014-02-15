angular.module('Directives', ['console', 'commandline'])
.directive('clicker', function(Events) { 
    return {
        restrict: 'E'
      , templateUrl: "/game/buttons"
      , scope: { d: "=d" }
      , controller: function($scope, $element, $attrs) {

            $scope.action = function(action) {
                if(_.isFunction(action)) {
                    action();     
                }   
            }    
        }
      , link: function(scope, element, attrs) {}
    }
})
.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    }
})
