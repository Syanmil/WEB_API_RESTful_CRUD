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
    memos.findAll({order:[['id', 'ASC']]}).then(function(memos) {
      res.send(memos)
    })
  },
  update: function(req, res){
    let id = req.params.id
    let content = req.body.content
    memos.update({
      content : content
    }, {
      where: {
      id: id
      }
    }).then(function(data){
      if(data[0] == 0){
        res.send('fail')
      } else {
        res.send('success')
      }
    })
  },
  delete: function(req, res){
    let id = req.params.id
    memos.findOne(
      {where: {
        id: id
      }}
    ).then(function(memo){
      memo.destroy()
    }).then(function(){
      res.send('success')
    }).catch(function(err){
      res.send('fail')
    })
  }
}

module.exports = memoController
