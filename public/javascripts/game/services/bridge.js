angular.module('Bridge', ['Comms', 'Ensign', 'Engineering', 'Tactical', 'Science', 'Navigator', 'Alien'])
.service('Bridge', function($rootScope, Navigator, Comms, Engineering, Science, Tactical, Ensign, Alien) { 

    var bridge = [
        {   'id': 'navigator'
          , 'main': Navigator
          , 'actions': {
                'status': Navigator.status
            }
        }
      , {   'id': 'ensign'
          , 'main': Ensign
          , 'actions': {
                'status': Ensign.status
            }
        }
      , {   'id': 'tactical'
          , 'main': Tactical
          , 'actions': {
                'status': Tactical.status
            }
        }
      , {   'id': 'science'
          , 'main': Science
          , 'actions': {
                'status': Science.status
            }
        }
      , {   'id': 'engineering'
          , 'main': Engineering
          , 'actions': {
                'status': Engineering.status
            }
        }
      , {   'id': 'comms'
          , 'main': Comms
          , 'actions': {
                'hailing frequencies': Comms.hailing
              , 'speak': Comms.speak
              , 'status': Comms.status
            }
        }
      , {   'id': 'alien'
          , 'main': Alien
          , 'actions': {
                'speak': Alien.speak
            }
        }

    ];

    return bridge;
});
