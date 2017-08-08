/**
 * Created by Administrator on 2017/3/5.
 */
let Mock = require('mockjs');
let moment = require('moment')

const permissons = [{
  "icon": "setting",
  "id": 1,
  "link": "/main/custom/list",
  "pid": null,
  "text": "会员管理",
  "tip": "会员管理"
},
  {
    "icon": "person-stalker",
    "id": 2,
    "link": "/main/permission/list",
    "pid": null,
    "text": "权限管理",
    "tip": "权限管理",
  }
];

module.exports = {
  "GET /api/permission": function (req, res) {

    setTimeout(function () {
      res.json(permissons)
    }, 500)
  },
  "GET /api/permission/roles": function (req, res) {
    setTimeout(function () {
      res.json([1,2])
    }, 500)
  }

}
