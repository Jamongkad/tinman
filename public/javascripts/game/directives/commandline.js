angular.module('commandline', [])
.directive('commandLine', function(Bridge) {
    return {
        restrict: 'E'     
      , template: '<input type="text" class="form-control" placeholder="" ng-model="command" ng-enter="capture()"/>' 
      , controller: function($scope, $element, $attrs) { 

            $scope.command = "";

            $scope.capture = function() {

                var text     = $scope.command;
                var commands = text.split(" ");
                var command  = commands[0];
                var object   = commands[1];

                if($scope.command != "" && object && (command == "report" || command == "observe" || command == "talk" || command == "help")) {  

                    if(command == "report") { 
                        var find = _.find(Bridge, function(obj) { return obj.id == object; });
                        $scope.$emit("send-order", find);
                    }

                    if(command == "talk") { 
                        var find = _.find(Bridge, function(obj) { return obj.id == object; });
                        find.main.speak();
                    }

                    if(command == "observe") {
                        var find = _.find(Bridge, function(obj) { return obj.id == object; });
                        $scope.$emit("send-order", find);
                    }

                    if(command == "help" && object == "me") {
                        $scope.$emit("push-message", "Irene is sexy!");    
                    }
                    
                }
                
                $scope.command = "";
            }
        }
       , link: function(scope, element, attrs) {
             $('.form-control', element).focus();
         }
    } 
});
