const router = require('express').Router()
const path = require('path')

const blogController = require(path.resolve(CONTROLLER_DIR,'blog'))
const {authenticationMiddleware ,authorizationMiddleware} = require(path.resolve(MIDDLEWARE_DIR,'auth'))
router.get('/' ,blogController.search);
router.get('/:id' ,blogController.find);
router.post('/' ,authenticationMiddleware, authorizationMiddleware(['admin']),blogController.create)
module.exports = router