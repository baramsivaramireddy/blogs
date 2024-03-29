const router = require('express').Router()
const path = require('path')

const blogController = require(path.resolve(CONTROLLER_DIR,'blog'))
const {authenticationMiddleware ,publicORAuthenticated ,authorizationMiddleware} = require(path.resolve(MIDDLEWARE_DIR,'auth'))
router.get('/' ,  publicORAuthenticated,blogController.search);
router.get('/:id' ,blogController.find);
router.post('/' ,authenticationMiddleware, authorizationMiddleware(['admin']),blogController.create)
router.patch('/:id' ,authenticationMiddleware, authorizationMiddleware(['admin']),blogController.update)
module.exports = router