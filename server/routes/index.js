const Router = require('express')
const router = new Router()
const bookRouter = require('./bookRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/book', bookRouter)





module.exports = router