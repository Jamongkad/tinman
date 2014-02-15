function GameCtrl($scope, $http, Game, Events) {
         
    //action repository so we can record the players actions
    $scope.playeractions = [];
    
    //player stats
    $scope.parentobj = {};
    $scope.parentobj.shields  = 300;
    $scope.parentobj.hull = 100;

    $scope.msgs = [];

    $http.get('/game/captain_log/1').success(function(data) {
        var msg = data.pop();
        $scope.msgs.unshift({'text': msg.log});     
    });
 
    $scope.$on('send-order', function(ev, val) {
        $scope.obj = val; 
        $scope.msgs.unshift({'text': val.main.desc});   
    });
     
    $scope.$on('delete-note', function(ev, val) {
        $scope.delete_msg(val);
   });

    $scope.$on('push-message', function(ev, val) {
        //$scope.add_msg({'text': val});
        $scope.msgs.unshift({'text': val });   
    });

    $scope.delete_msg = function(val) { 
        var position = $scope.msgs.indexOf(val);
        if(~position) $scope.msgs.splice(position, 1);
    } 

    $scope.add_msg = function(text) {
        if(_.findWhere($scope.msgs, text) == null) {
            $scope.msgs.unshift(text);     
        } 
    }
    
    var gameover = false

    Game.gameover = false;
    Game.logic = function() {
        $scope.$apply();
        Game.gameover = gameover;
    }   
}
