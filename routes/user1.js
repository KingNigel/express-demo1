var express = require('express');
var router = express.Router();
var user1 = require("../models/user2.js");
/* GET users listing. */
router.get('/getUser1', function(req, res) {
  user1.getUserbyUsername(req.param('name'),function(err,data){
    if (err) {
      res.send("{error:true}");
    }
    res.send("{success:true}");
  });

});

module.exports = router;
