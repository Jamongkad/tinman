angular.module('Comms', [])
.service('Comms', function($rootScope, $modal) { 
    function Comms() {

        this.desc = "Comms Officer Ray Dalton: Yes sir?";
        this.name = "Comms Officer Ray Dalton";

        this.hailing = function() {
            console.log("Hailing...");
        }

        this.speak = function() {
                        
            var modalInstance = $modal.open({
                template: 'Mathew'
              //, controller: ModalInstanceCtrl 
            });
        }
    }
    return new Comms();
})
