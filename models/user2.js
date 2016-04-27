/**
 * Created by cena on 2016/4/8.
 */
var db = require('./db.js');
function User(user) {
    this.username = user.username;
    this.password = user.password;
}
User.getUserbyUsername = function (username,callback) {
        var selectSql = 'select * from user where user_name = ?';
        db.query(selectSql, [username], function (err, res) {

            console.log(res);
            callback(err,res);
        });

};
module.exports = User;