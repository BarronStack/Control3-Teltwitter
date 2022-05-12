import Router from 'koa-router'
import getHealth from './health/health'
import users from './usuarios/users.route'

const router = new Router()

router.get('/health', getHealth)
router.get('/get-all-users', users.getAllUsers)
router.post('/get-user', users.getUser)

export default router
