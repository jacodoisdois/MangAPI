import { AppRoutes } from './routes/routes'
import Koa from 'koa'
import Router from 'koa-router'
const router = new Router()

AppRoutes.forEach(route => {
  router[route.method](route.path, route.action)
})

const app = new Koa()

app.use(router.routes())

app.listen(process.env.API_PORT ?? 3000)
