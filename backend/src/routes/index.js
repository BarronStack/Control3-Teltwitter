import Router from 'koa-router'
import getHealth from './health/health'
import users from './general/users.route'
import tweet from './general/tweets.router'

const router = new Router()

router.get('/health', getHealth)
/*Usuarios*/
router.get('/get-all-users', users.getAllUsers)
router.post('/get-user', users.getUser)
/*Tweets*/
router.get('/get-all-tweets', tweet.getTweets)
router.post('/new-tweet', tweet.newTweet)

export default router
