import { type Context } from 'koa'

/* eslint-disable @typescript-eslint/no-extraneous-class */
export default class ProductController {
  static createAmazonProducts = (ctx: Context): void => {
    try {
      ctx.body = 'ok'
      ctx.response.set('status', '200')
    } catch (error) {
      console.error('Error creating Amazon products:', error.message)
    }
  }
}
