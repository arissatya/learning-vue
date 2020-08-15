const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller')
// const authenticate = require('../middlewares/authenticate')


router.get('/', Controller.fetchData)
router.post('/', Controller.addData)

module.exports = router