const {Data} = require('../models/index')

class Controller{
  static fetchData(req,res,next){
    Data.findAll()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static addData(req,res,next){
    Data.create({
      title: req.body.title,
      content: req.body.content,
      img: req.body.img,
    })
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

}

module.exports = Controller