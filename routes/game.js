var mysql  = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'tinman'});
var async  = require('async');

exports.main = function(req, res) {
    res.render("partials/main");
};

exports.pressme = function(req, res) {    
    res.render("partials/pressme");
};

exports.buttons = function(req, res) {    
    res.render("partials/button_view");
};

exports.console_item = function(req, res) {    
    res.render("partials/console_item");
}

exports.captain_log = function(req, res) {    
    var id = req.params.id;
    var sql = "SELECT * FROM captain_log WHERE 1=1 AND id = ?";
    var query = client.query(sql, [id], function(err, results) {   
        res.json(results);
    });
}

