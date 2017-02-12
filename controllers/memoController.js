const memos = require('../models').memo

let memoController = {
  create: function (req, res) {

  },
  read: function(req, res){
    memos.findAll().then(function(data) {
      res.send(data)
    })
  },
  update: function(req, res){

  },
  delete: function(req, res){

  }
}

module.exports = memoController
