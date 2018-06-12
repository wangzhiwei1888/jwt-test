var express = require('express');
var router = express.Router();
const token = require('../config/token');
const CONFIG = require('../config/config')

function callback(err, docs, res, next) {
  if (err) {
    next(err)
    return
  }
  res.json({
    code: CONFIG.ERR_OK,
    data: docs
  })
}


router.get('/login', (req, res, next) => {

  var docs = [{
    username: 'wzw',
    password: '123'
  }];

  const tok = token.sign(docs[0])
  /**
   * 保存token到redis
   */
  token.add(tok)
  res.json({
    code: CONFIG.ERR_OK,
    token: tok,
    role: docs[0].role
  })
  return

})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});



module.exports = router;