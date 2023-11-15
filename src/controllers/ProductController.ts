import { type Context } from 'koa'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class ProductController {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  static createAmazonProducts = (ctx: Context): void => {
    try {
      ctx.body = 'ok'
      ctx.response.set('status', '200')
    } catch (error) {
      console.error('Error creating Amazon products:', error.message)
    }
  }
}
