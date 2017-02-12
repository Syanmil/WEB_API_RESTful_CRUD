const memos = require('../models').memo

let memoController = {
  create: function (req, res) {
    let content =  req.body.content
    memos.create({
      content: content
    }).then(function(memo){
      res.send(memo)
    })
  },
  read: function(req, res){
    memos.findAll().then(function(memos) {
      res.send(memos)
    })
  },
  update: function(req, res){

  },
  delete: function(req, res){

  }
}

module.exports = memoController
