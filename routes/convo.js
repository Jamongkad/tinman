var mysql  = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'tinman'});
var async  = require('async');
var _      = require('underscore');

exports.start = function(req, res) {
    res.render("partials/convo_start");
};

exports.convo_start = function(req, res) {
    var sql = "SELECT d.dialog AS topic, d.id AS topic_id, a.dialog AS options, a.id AS option_id, dialog_node.to_node FROM dialog_node "
            + "LEFT JOIN dialog AS d ON d.id = dialog_node.topic_id "
            + "LEFT JOIN dialog AS a ON a.id = dialog_node.option_id "
            + "WHERE 1=1 "
            + "AND dialog_node.topic_id = ? "
            + "AND a.officer = ? "
            + "AND dialog_node.group_id = ?";

    var id = req.params.id;
    var officer = req.params.officer;
    var group_id = req.params.group_id;

    var query = client.query(sql, [id, officer, group_id], function(err, results) {   
        var d = _.groupBy(results, function(n) {
            return n.topic;   
        });
        res.json(d);
    }); 
}
