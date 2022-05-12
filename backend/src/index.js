import koa from 'koa'
import bodyParser from 'koa-body'
import router from './routes/index'

const app = new koa()
const port = 3002

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
