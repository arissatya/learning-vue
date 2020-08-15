function errorHander(err, req, res, next) {
  res.status(500).json({
    msg: "You got an error",
    desc: err
  })
}

module.exports = errorHander