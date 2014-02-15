angular.module('Bridge', ['Crew', 'Comms', 'Ensign', 'Engineering', 'Tactical', 'Science', 'Navigator', 'Alien'])
.service('Bridge', function($rootScope, Crew, Navigator, Comms, Engineering, Science, Tactical, Ensign, Alien) { 

    var bridge = [
        { 'id': 'crew', 'main': Crew }
      , { 'id': 'navigator', 'main': Navigator }
      , { 'id': 'ensign', 'main': Ensign }
      , { 'id': 'tactical', 'main': Tactical }
      , { 'id': 'science', 'main': Science }
      , { 'id': 'engineering', 'main': Engineering }
      , { 'id': 'comms', 'main': Comms }
      , { 'id': 'alien', 'main': Alien }
    ];

    return bridge;
});
