var mysql  = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'tinman'});
var async  = require('async');
var _      = require('underscore');

exports.text = function(req, res) {
    var sql = "SELECT * FROM narration WHERE 1=1 AND id = ? AND officer = ?";

    var id = req.params.id;
    var officer = req.params.officer;

    var query = client.query(sql, [id, officer], function(err, results) {   
        res.json(_.first(results));
    }); 
};
