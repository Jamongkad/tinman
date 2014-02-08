angular.module('Bridge', ['Comms', 'Ensign', 'Engineering', 'Tactical', 'Science', 'Navigator', 'Alien'])
.service('Bridge', function($rootScope, Comms, Alien) { 

    var bridge = [
        {   'officer': 'comms'
          , 'main': Comms
          , 'actions': {
                'hailing frequencies': Comms.hailing
              , 'speak': Comms.speak
            }
        }
      , {   'officer': 'alien'
          , 'main': Alien
          , 'actions': {
                'speak': Alien.speak
            }
        }

    ];

    return bridge;
});
