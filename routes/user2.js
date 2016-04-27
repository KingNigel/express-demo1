/**
 * Created by cena on 2016/4/8.
 */
var user2 = require("../models/user2.js");
module.exports = function(app) {
    app.get('/getUser2',function  (req,res) {
        user2.getUserbyUsername(req.param('name'),function(err,data){
            if (err) {
                res.send("{error:true}");
            }
            res.send("{success:true}");
        });

    } );

}
