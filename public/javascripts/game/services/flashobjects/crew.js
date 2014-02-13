angular.module('Crew', [])
.service('Crew', function($rootScope, $modal) { 
    function Crew() { 
        this.desc = "Your eyes drift around the bridge. You and your crew have been traveling in hyperspace for two days. News of CF-101 has certainly sparked the interest "
                  + "and imagination of several of your crew members. You admit to yourself that the prospect of being one of the  " 
                  + "first human beings to come into contact with a potentially new type of species excites you as well. As you were about to ponder into the "
                  + "deeper implications of discovering a new species and what it would mean for mankind. The audible beep of your navigation computer interrupts your " 
                  + "thoughts. The read outs are plain as day. You have arrived in Durin 5. It's time to take the ship of out hyperspace and conduct a routine checkup "
                  + "of it's systems.";
        
        /*
        var timeout;

        if(timeout) {
            clearTimeout(timeout); 
        }

        timeout = setTimeout(function() { 
            var msg = 'A knock on the door startles you. As you rush to find out who it is. ' + 
                      'You find a <i>note</i> and a plate of food and water at the foot of the door. ' + 
                      'How did they appear through a solid wooden door is a mystery. ' + 
                      'All you know, is your captor is intent on keeping you here for the time being. '


            $rootScope.$broadcast('push-message', msg);  
        }, 3000);
        */
    }

    return new Crew();
});
