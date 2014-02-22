/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , game = require('./routes/game')
  , convo = require('./routes/convo')
  , narration = require('./routes/narration')
  , http = require('http')
  , path = require('path')
  , mingy = require('mingy');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/game/main', game.main);
app.get('/game/pressme', game.pressme);
app.get('/game/console_item', game.console_item);
app.get('/game/buttons', game.buttons);
app.get('/game/captain_log/:id', game.captain_log);
app.get('/convo/start', convo.start);
app.get('/convo/convo_start/:id/:officer/:group_id', convo.convo_start);
app.get('/narration/text/:id/:officer', narration.text);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
