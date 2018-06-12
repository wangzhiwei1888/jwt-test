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

// router.get('/checklogin', (req, res, next) => {
//   console.log(1)
//   token.checkRedis(req, res, next)

// }, (req, res, next) => {
//   console.log(2)
//   res.json({
//     code: CONFIG.ERR_OK,
//     login: true,
//   })
// })

router.get('/checklogin', (req, res, next) => {

  res.json({
    code: CONFIG.ERR_OK,
    login: true,

  })

})

router.get('/logout', (req, res, next) => {

  // console.log(req.query.token);
  token.remove(req)
  res.json({
    code: CONFIG.ERR_OK,
    status: 'ok'
  })

})


module.exports = router;