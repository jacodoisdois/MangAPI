import { type IGenericProduct } from '../interfaces/IGenericProduct'
import { type IMangaProduct } from '../interfaces/IMangaProduct'

export interface IAttributeSelector {
  name: string
  css: string
  type: string
  slice?: number
}

export interface GenericProduct {
  rawPrice: number
  discountPrice: number
  discountPercentual: number
  title: string
  description: string
  thereIsDiscount: boolean
}

export type ProductTypes = IGenericProduct | IMangaProduct

export type HTTPMethods = 'get' | 'post'
