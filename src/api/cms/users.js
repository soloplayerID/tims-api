var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello World');
});

router.get('/me', function(res, res, next) {
   res.send('hi ini ilham tralala '+process.env.APP_NAME);
});

module.exports = router;
