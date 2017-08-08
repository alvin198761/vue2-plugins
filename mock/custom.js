/**
 * Created by Administrator on 2017/3/5.
 */
let Mock = require('mockjs');
let moment = require('moment')

module.exports = {
  "GET /api/custom": function (req, res) {

    setTimeout(function () {
      res.json({
        items:[],
        total:100
      })
    }, 500)
  }
}
