import ProductController from '../controllers/ProductController'
import { type Context } from 'koa'

interface Route {
  path: string
  method: 'get' | 'post' | 'delete'
  action: (ctx: Context) => any
}

export const AppRoutes: Route[] = [
  {
    path: '/products/amazon',
    method: 'get',
    action: (ctx: any) => {
      ProductController.createAmazonProducts(ctx)
    }
  }
]
