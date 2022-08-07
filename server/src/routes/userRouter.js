const router = require('express').Router()
const userController = require('../controllers/userController')
const verifyToken = require('../middleware/verifyToken')



router.get('/get-one', verifyToken, userController.getOne)



module.exports = router