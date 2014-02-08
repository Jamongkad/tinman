angular.module('Directives', ['console', 'commandline'])
.directive('clicker', function(Events) { 
    return {
        restrict: 'E'
      , templateUrl: "/game/buttons"
      , scope: { d: "=d" }
      , controller: function($scope, $element, $attrs) {
            
            //fires object action...
            $scope.action = function(key) {
                var d = $scope.d;

                if(key in d.actions) {
                    var func = d.actions[key];
                    if(_.isFunction(func)) {
                        func.call();     
                    }                   
                } 
                //emits to events service
                $scope.$emit('send-room-object', d);

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
